// Pinta los datos de cada categoría
const categorize = (coinQuery, billQuery, continent) => {
    let countries = {},
        fragment = "";

    // Categoriza las monedas por país
    coinQuery.forEach((doc) => {
        if (countries[doc.data().country] === undefined) {
            countries[doc.data().country] = ["", ""];
        }
        countries[doc.data().country][0] += coinCardTemplate(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            countriesMap[doc.data().country][1].toLowerCase()
        );
    });

    // Categoriza los billetes por país
    billQuery.forEach((doc) => {
        if (countries[doc.data().country] == undefined) {
            countries[doc.data().country] = ["", ""];
        }
        countries[doc.data().country][1] += billCardTemplate(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            countriesMap[doc.data().country][1].toLowerCase()
        );
    });

    for (const c in countries) {
        fragment += countryTemplate(countriesMap[c][0], countries[c][0], countries[c][1]);
    }
    continentCards.innerHTML = fragment != "" ? fragment : notFoundTemplate();
    setLike();
};

// Limpia la pantalla para mostrar la información de un continente
const cleanScreen = () => {
    continentsContainer.style.display = "none";
    backButton.style.display = "flex";
};

const cleanScreenLogin = () => {
    logueo.style.display = "none";
    //backButton.style.display = "flex";
};

const cleanScreenAgregar = () => {
    agregar.style.display = "none";
};

//Procesa los datos de input que se le dieron al filtro
const dataProcessing = (yi, yf, di, df, pais) => {
    if (pais === "") {
        alert("Para usar el filtro, por favor selecciona un país.");
    } else {
        if (yi === "") {
            yi = 0;
        }
        if (di === "") {
            di = 0;
        }
        if (yf === "") {
            yf = new Date().getFullYear();
        }
        if (df === "") {
            df = Infinity;
        }

        continentPais = countriesMap[idPaises[pais]][1];
        return [yi, yf, di, df, pais, continentPais];
    }
};

// Filtra de acuerdo a los parámetros de búsqueda
const filter = (coinQuery, billQuery, ans) => {
    let yi = Number(ans[0]),
        yf = Number(ans[1]),
        di = Number(ans[2]),
        df = Number(ans[3]),
        pais = ans[4];

    let countries = {},
        fragment = "";

    // Categoriza las monedas por país
    coinQuery.forEach((doc) => {
        if (countriesMap[doc.data().country][0] === pais && di <= doc.data().denomvalue && doc.data().denomvalue <= df && yi <= doc.data().year && doc.data().year <= yf) {
            if (countries[doc.data().country] === undefined) {
                countries[doc.data().country] = ["", ""];
            }
            //console.log(doc.data());
            countries[doc.data().country][0] += coinCardTemplate(
                doc.id,
                doc.data().front,
                doc.data().back,
                countriesMap[doc.data().country][0],
                doc.data().denomsymbol,
                doc.data().denomvalue,
                doc.data().year,
                doc.data().likes,
                doc.data().barter,
                countriesMap[doc.data().country][1].toLowerCase()
            );
        }
    });

    // Categoriza los billetes por país
    billQuery.forEach((doc) => {
        if (countriesMap[doc.data().country][0] === pais && di <= doc.data().denomvalue && doc.data().denomvalue <= df && yi <= doc.data().year && doc.data().year <= yf) {
            if (countries[doc.data().country] == undefined) {
                countries[doc.data().country] = ["", ""];
            }
            countries[doc.data().country][1] += billCardTemplate(
                doc.id,
                doc.data().front,
                doc.data().back,
                countriesMap[doc.data().country][0],
                doc.data().denomsymbol,
                doc.data().denomvalue,
                doc.data().year,
                doc.data().likes,
                doc.data().barter,
                countriesMap[doc.data().country][1].toLowerCase()
            );
        }
    });

    for (const c in countries) {
        fragment += countryTemplate(countriesMap[c][0], countries[c][0], countries[c][1]);
    }

    cleanScreen();
    continentCards.innerHTML = fragment != "" ? fragment : notFoundTemplate();
    setLike();
};

// LLena las opciones de país en el filtro
const fillCountryOptions = () => {
    const countryOption = document.getElementById("country");
    countryOption.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragment = "";
    countriesMap.forEach((c) => {
        fragment += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOption.innerHTML += fragment;
};

// Pinta los datos de los destacados
const paintFeatured = (featuredCoins, featuredBills) => {
    // Pinta las monedas destacadas
    let fragment = "";
    featuredCoins.forEach((doc) => {
        fragment += coinCardTemplateIndex(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            countriesMap[doc.data().country][1].toLowerCase()
        );
    });
    featuredCoinsContainer.innerHTML = fragment;
    // Pinta los billetes destacados
    fragment = "";
    featuredBills.forEach((doc) => {
        fragment += billCardTemplateIndex(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            countriesMap[doc.data().country][1].toLowerCase()
        );
    });
    featuredBillsContainer.innerHTML = fragment;
    setLike();
};

// Obtiene el documento desde un id específico
const getDocument = (id, collection) => db.collection(collection).doc(id).get();

// Actualiza el document desde un id con unos datos nuevos
const updateDocument = (id, newData, collection) => db.collection(collection).doc(id).update(newData);

const updateFeatured = (ultimo, nuevo, collection) => {
    //Se borra el más antiguo (primero en asc)
    db.collection(collection)
        .doc(ultimo.id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    //Se añade el que se acaba de crear
    db.collection(collection)
        .doc(nuevo.id)
        .set({
            ID: nuevo.data().ID,
            back: nuevo.data().back,
            barter: nuevo.data().barter,
            country: nuevo.data().country,
            created: nuevo.data().created,
            denomsymbol: nuevo.data().denomsymbol,
            denomvalue: nuevo.data().denomvalue,
            front: nuevo.data().front,
            likes: nuevo.data().likes,
            year: nuevo.data().year,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
};

// Eventos de like
const setLike = () => {
    // Los botones de like
    const coinLike = document.querySelectorAll(".coin-like");
    const billLike = document.querySelectorAll(".bill-like");

    // Evento de click para cada botón de like de monedas
    coinLike.forEach((likeButton) => {
        likeButton.addEventListener("click", async (e) => {
            const doc = await getDocument(e.target.dataset.id, e.target.dataset.continent);
            const i = doc.data().likes + 1;
            updateDocument(doc.id, {likes: i}, e.target.dataset.continent);

            // Para actualizar los destacados
            const featuredCoins = db.collection("featuredCoins").orderBy("likes", "asc").limit(1).get();
            if (featuredCoins.data().likes < i) {
                updateFeatured(featuredCoins, doc, "featuredCoins");
            }
        });
    });

    // Evento de click para cada botón de like de billetes
    billLike.forEach((likeButton) => {
        likeButton.addEventListener("click", async (e) => {
            const doc = await getDocument(e.target.dataset.id, e.target.dataset.continent);
            const i = doc.data().likes + 1;
            updateDocument(doc.id, {likes: i}, e.target.dataset.continent);

            // Para actualizar los destacados
            const featuredBills = db.collection("featuredBills").orderBy("likes", "asc").limit(1).get();
            if (featuredBills.data().likes < i) {
                updateFeatured(featuredBills, doc, "featuredBills");
            }
        });
    });
};

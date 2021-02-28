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
            continent
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
            continent
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
                continent
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
                continent
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

//Opciones del filtro una vez se incio la sesión para agregar
const fillCountryOptions2 = () => {
    const countryOptionCoin = document.getElementById("countriesCoin");
    countryOptionCoin.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragmentCoin = "";
    countriesMap.forEach((c) => {
        fragmentCoin += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOptionCoin.innerHTML += fragmentCoin;

    const countryOptionBill = document.getElementById("countriesBill");
    countryOptionBill.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragmentBill = "";
    countriesMap.forEach((c) => {
        fragmentBill += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOptionBill.innerHTML += fragmentBill;
};

// Pinta los datos de los destacados
const paintFeatured = (featuredCoins, featuredBills) => {
    // Pinta las monedas destacadas
    let fragment = "";
    featuredCoins.forEach((doc) => {
        fragment += coinCardTemplate(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            continent
        );
    });
    featuredCoinsContainer.innerHTML = fragment;
    // Pinta los billetes destacados
    fragment = "";
    featuredBills.forEach((doc) => {
        fragment += billCardTemplate(
            doc.id,
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter,
            continent
        );
    });
    featuredBillsContainer.innerHTML = fragment;
    setLike();
};

// Obtiene el documento desde un id específico
const getDocument = (id, collection) => db.collection(collection).doc(id).get();

// Actualiza el document desde un id con unos datos nuevos
const updateDocument = (id, newData, collection) => db.collection(collection).doc(id).update(newData);

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
        });
    });

    // Evento de click para cada botón de like de billetes
    billLike.forEach((likeButton) => {
        likeButton.addEventListener("click", async (e) => {
            const doc = await getDocument(e.target.dataset.id, e.target.dataset.continent);
            const i = doc.data().likes + 1;
            updateDocument(doc.id, {likes: i}, e.target.dataset.continent);
        });
    });
};


const addNewElement = () =>{
    
}
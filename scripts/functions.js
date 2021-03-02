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
    console.log(fragment)
    continentCards.innerHTML = fragment != "" ? fragment : notFoundTemplate();
    setLike();
};

// Pinta los datos de Colombia
const paintColombia = (coinQuery, billQuery) => {
    let coinFragment = "",
        billFragment = "",
        fragment = "";

    coinQuery.forEach((doc) => {
        if (doc.data().country === 46) {
            coinFragment += coinCardTemplate(
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

    billQuery.forEach((doc) => {
        if (doc.data().country === 46) {
            billFragment += billCardTemplate(
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

    fragment = countryTemplate("Colombia", coinFragment, billFragment);
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

const fillCountryOptions2 = () => {
    const countryOptionBill = document.getElementById("countriesBill");
    countryOptionBill.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragmentBill = "";
    countriesMap.forEach((c) => {
        fragmentBill += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOptionBill.innerHTML += fragmentBill;

    const countryOptionCoin = document.getElementById("countriesCoin");
    countryOptionCoin.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragmentCoin = "";
    countriesMap.forEach((c) => {
        fragmentCoin += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOptionCoin.innerHTML += fragmentCoin;
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
};

// Pinta los datos de los nuevos
const paintRecent = (recentCoins, recentBills) => {
    // Pinta las monedas nuevas
    let fragment = "";
    recentCoins.forEach((doc) => {
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
    recentCoinsContainer.innerHTML = fragment;
    // Pinta los billetes nuevos
    fragment = "";
    recentBills.forEach((doc) => {
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
    recentBillsContainer.innerHTML = fragment;
};

// Obtiene el documento desde un id específico
const getDocument = (id, collection) => db.collection(collection).doc(id).get();

// Actualiza el document desde un id con unos datos nuevos
const updateDocument = (id, newData, collection) => db.collection(collection).doc(id).update(newData);

const updateFeatured = async (ultimo, nuevo, collection) => {
    //Se borra el más antiguo (primero en asc)
    await db
        .collection(collection)
        .doc(ultimo.id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    //Se añade el que se acaba de crear
    await db
        .collection(collection)
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
            await updateDocument(doc.id, {likes: i}, e.target.dataset.continent);

            // Para actualizar los destacados
            const featuredC = await db
                .collection("featuredCoins")
                .orderBy("likes", "asc")
                .limit(1)
                .get()
                .then((snapshot) => {
                    snapshot.docs.forEach(async (featuredCoins) => {
                        await updateDocument(featuredCoins.id, {likes: i}, "featuredCoins");
                        if (featuredCoins.data().likes < i) {
                            updateFeatured(featuredCoins, doc, "featuredCoins");
                        }
                    });
                });
        });
    });

    // Evento de click para cada botón de like de billetes
    billLike.forEach((likeButton) => {
        likeButton.addEventListener("click", async (e) => {
            const doc = await getDocument(e.target.dataset.id, e.target.dataset.continent);
            const i = doc.data().likes + 1;
            await updateDocument(doc.id, {likes: i}, e.target.dataset.continent);

            // Para actualizar los destacados
            const featuredB = await db
                .collection("featuredBills")
                .orderBy("likes", "asc")
                .limit(1)
                .get()
                .then((snapshot) => {
                    snapshot.docs.forEach(async (featuredBills) => {
                        await updateDocument(featuredBills.id, {likes: i}, "featuredBills");
                        if (featuredBills.data().likes < i) {
                            updateFeatured(featuredBills, doc, "featuredBills");
                        }
                    });
                });
        });
    });
};




const updateRecentBills = (objectCollection) => {
    let ultimo = db.collection("recentBills").orderBy("created", "asc").limit(1).get();

    //Se borra el más antiguo (primero en asc)
    db.collection("recentBills")
        .doc(ultimo.id)
        .delete()
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });


    objectCollection.then((snapshot)=>{
        snapshot.docs.forEach(async (nuevo) => {
            //Se añade el que se acaba de crear
            db.collection("recentBills")
            .doc(nuevo.id)
            .set({

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
        });
    });
};


const addNewElement = async (country, year, den, front, back, typeC_B) => {
    
    const refFront = firebase.storage().ref();
    const refBack = firebase.storage().ref();
    const nameFileFront =`${new Date()}_${front.name}`;
    const nameFileBack = `${new Date()}_${back.name}`;
    const metadata = {
        contentType: File.type,
    };
    const taskFront = refFront.child(nameFileFront).put(front, metadata);
    const taskBack = refBack.child(nameFileBack).put(back, metadata);
    let continent = "";
    let urlBack = "";
    let urlFront = "";

    countriesMap.forEach((e) => {
        if (e[0] === country){
            continent = e[1];
        }
    });
    

    for (var [key, value] of Object.entries(idPaises)) {
        if(key === country){
            country = value;
        }
    }
    
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    
    switch (continent) {
        case "Antartica":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("antarticaBills").add(newMoney)
                        
                    }else{
                        await db.collection("antarticaCoins").add(newMoney)
                    }
                });
            });
            break;
        case "Africa":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("africaBills").add(newMoney)
                    }else{
                        await db.collection("africaCoins").add(newMoney)
                    }
                });
            });
            break;
        case "Europe":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("europeBills").add(newMoney)
                    }else{
                        await db.collection("europeCoins").add(newMoney)
                    }
                });
            });
            break;
        case "America":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("americaBills").add(newMoney)
                        await updateRecentBills(db.collection("americaBills").orderBy("created", "desc").limit(1).get());
                        
                    }else{
                        await db.collection("americaCoins").add(newMoney)
                        await updateRecentBills(db.collection("americaCoins").orderBy("created", "desc").limit(1).get());
                    }
                });
            });
            break;
        case "Oceania":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("oceaniaBills").add(newMoney)
                    }else{
                        await db.collection("oceaniaCoins").add(newMoney)
                    }
                });
            });
            break;
        case "Asia":
            console.log(continent);
            taskFront
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                urlFront = url;
                taskBack
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(async url => {
                    urlBack = url;
                    const newMoney = { back: urlBack, barter: 1, country: parseInt(country, 10), created: timestamp, denomsymbol: "$", denomvalue: parseInt(den, 10), front: urlFront, likes: 0, year: parseInt(year, 10)}
                    if(typeC_B === "B"){
                        await db.collection("asiaBills").add(newMoney)
                    }else{
                        await db.collection("asiaCoins").add(newMoney)
                    }
                });
            });
            break;
        default:
            alert("Error");
            break;
    }

};

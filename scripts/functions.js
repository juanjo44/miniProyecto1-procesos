// Pinta los datos
const categorize = (coinQuery, billQuery) => {
    let countries = {},
        fragment = "";

    // Categoriza las monedas por país
    coinQuery.forEach((doc) => {
        if (countries[doc.data().country] === undefined) {
            countries[doc.data().country] = ["", ""];
        }
        countries[doc.data().country][0] += coinCardTemplate(
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });

    // Categoriza los billetes por país
    billQuery.forEach((doc) => {
        if (countries[doc.data().country] == undefined) {
            countries[doc.data().country] = ["", ""];
        }
        countries[doc.data().country][1] += billCardTemplate(
            doc.data().front,
            doc.data().back,
            countriesMap[doc.data().country][0],
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });

    for (const c in countries) {
        fragment += countryTemplate(countriesMap[c][0], countries[c][0], countries[c][1]);
    }
    continentCards.innerHTML = fragment != "" ? fragment : notFoundTemplate();
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
        if (
            countriesMap[doc.data().country][0] === pais &&
            di <= doc.data().denomvalue &&
            doc.data().denomvalue <= df &&
            yi <= doc.data().year &&
            doc.data().year <= yf
        ) {
            if (countries[doc.data().country] === undefined) {
                countries[doc.data().country] = ["", ""];
            }
            //console.log(doc.data());
            countries[doc.data().country][0] += coinCardTemplate(
                doc.data().front,
                doc.data().back,
                countriesMap[doc.data().country][0],
                doc.data().denomsymbol,
                doc.data().denomvalue,
                doc.data().year,
                doc.data().likes,
                doc.data().barter
            );
        }
    });

    // Categoriza los billetes por país
    billQuery.forEach((doc) => {
        if (
            countriesMap[doc.data().country][0] === pais &&
            di <= doc.data().denomvalue &&
            doc.data().denomvalue <= df &&
            yi <= doc.data().year &&
            doc.data().year <= yf
        ) {
            if (countries[doc.data().country] == undefined) {
                countries[doc.data().country] = ["", ""];
            }
            countries[doc.data().country][1] += billCardTemplate(
                doc.data().front,
                doc.data().back,
                countriesMap[doc.data().country][0],
                doc.data().denomsymbol,
                doc.data().denomvalue,
                doc.data().year,
                doc.data().likes,
                doc.data().barter
            );
        }
    });

    for (const c in countries) {
        fragment += countryTemplate(countriesMap[c][0], countries[c][0], countries[c][1]);
    }

    cleanScreen();
    continentCards.innerHTML = fragment != "" ? fragment : notFoundTemplate();
};

const fillCountryOptions = () => {
    const countryOption = document.getElementById("country");
    countryOption.innerHTML = `<option value="">Selecciona un país</option>`;
    let fragment = "";
    countriesMap.forEach((c) => {
        fragment += `<option value="${c[0]}">${c[0]}</option>`;
    });
    countryOption.innerHTML += fragment;
};

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
    continentCards.innerHTML = fragment;
};

// Limpia la pantalla para mostrar la información de un continente
const cleanScreen = () => {
    continentsContainer.style.display = "none";
    backButton.style.display = "flex";
};

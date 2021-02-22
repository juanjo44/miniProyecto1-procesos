// Pinta los datos
const paintData = (coinQuery, billQuery) => {
    let fragment = "";
    // Pinta las monedas
    coinQuery.forEach((doc) => {
        // Agrega cada documento de moneda (card)
        fragment += coinCardTemplate(
            doc.data().front,
            doc.data().back,
            doc.data().country,
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });
    coinsContainer.innerHTML = fragment;

    fragment = "";
    // Pinta los billetes
    billQuery.forEach((doc) => {
        // Agrega cada documento de billete (card)
        fragment += billCardTemplate(
            doc.data().front,
            doc.data().back,
            doc.data().country,
            doc.data().denomsymbol,
            doc.data().denomvalue,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });
    billsContainer.innerHTML = fragment;
};

// Limpia la pantalla para mostrar la información de un continente
const cleanScreen = () => {
    continentsContainer.style.display = "none";
    backButton.style.display = "flex";
};

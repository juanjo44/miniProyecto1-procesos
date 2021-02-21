// Trae la base de datos
const db = firebase.firestore();

// Trae los contenedores HTML donde se van a mostrar los cards
const coinsContainer = document.getElementById("coins-container");
const billsContainer = document.getElementById("bills-container");

// Trae algunos elementos que se van a mostrar u ocultar al seleccionar un continente
const continentsContainer = document.getElementById("continents");
const backButton = document.getElementById("back-button");

// Trae los botones de los continentes
const africa = document.getElementById("africa");
const america = document.getElementById("america");
const antartica = document.getElementById("antartica");
const asia = document.getElementById("asia");
const europe = document.getElementById("europe");
const oceania = document.getElementById("oceania");

// Trae los datos desde las colecciones de Firebase
const getCoins = () => db.collection("coins").get();
const getBills = () => db.collection("bills").get();

const cleanScreen = () => {
    coinsContainer.innerHTML = "";
    billsContainer.innerHTML = "";
    continentsContainer.style.display = "none";
    backButton.style.display = "flex";
};

// Interpreta los datos de América y los pinta
america.addEventListener("click", async (e) => {
    const coinQuery = await getCoins();
    const billQuery = await getBills();
    cleanScreen();
    getContinentData(coinQuery, billQuery, "América");
});

// Pinta los datos
const getContinentData = (coinQuery, billQuery, continent) => {
    // Pinta las monedas
    coinQuery.forEach((doc) => {
        if (doc.data().continent === continent) {
            // Agrega cada documento de moneda (card)
            coinsContainer.innerHTML += coinCardTemplate(
                doc.data().front,
                doc.data().back,
                doc.data().country,
                doc.data().denom,
                doc.data().year,
                doc.data().likes,
                doc.data().barter
            );
        }
    });
    // Pinta los billetes
    billQuery.forEach((doc) => {
        if (doc.data().continent === continent) {
            // Agrega cada documento de billete (card)
            billsContainer.innerHTML += billCardTemplate(
                doc.data().front,
                doc.data().back,
                doc.data().country,
                doc.data().denom,
                doc.data().year,
                doc.data().likes,
                doc.data().barter
            );
        }
    });
};

// Limpia la pantalla para volver al menú
backButton.addEventListener("click", (e) => {
    continentsContainer.style.display = "grid";
    backButton.style.display = "none";
    coinsContainer.innerHTML = "";
    billsContainer.innerHTML = "";
});

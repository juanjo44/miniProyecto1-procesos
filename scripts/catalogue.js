// Trae la base de datos
const db = firebase.firestore();

// Trae los datos desde las colecciones de Firebase
// ! CORREGIR: QUE SEA POR CONTINENTE
const getAmericaCoins = () => db.collection("americaCoins").get();
const getAmericaBills = () => db.collection("americaBills").get();

// Interpreta los datos de América y los pinta
america.addEventListener("click", async (e) => {
    const coinQuery = await getAmericaCoins();
    const billQuery = await getAmericaBills();
    cleanScreen();
    paintData(coinQuery, billQuery);
});

// Limpia la pantalla para volver al menú
backButton.addEventListener("click", (e) => {
    continentsContainer.style.display = "grid";
    backButton.style.display = "none";
    coinsContainer.innerHTML = "";
    billsContainer.innerHTML = "";
});

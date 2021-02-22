// Trae la base de datos
const db = firebase.firestore();

// Trae los datos desde las colecciones de Firebase
const getAfricaCoins = () => db.collection("africaCoins").get();
const getAfricaBills = () => db.collection("africaBills").get();
const getAmericaCoins = () => db.collection("americaCoins").get();
const getAmericaBills = () => db.collection("americaBills").get();
const getAntarticaCoins = () => db.collection("antarticaCoins").get();
const getAntarticaBills = () => db.collection("antarticaBills").get();
const getAsiaCoins = () => db.collection("asiaCoins").get();
const getAsiaBills = () => db.collection("asiaBills").get();
const getEuropeCoins = () => db.collection("europeCoins").get();
const getEuropeBills = () => db.collection("europeBills").get();
const getOceaniaCoins = () => db.collection("oceaniaCoins").get();
const getOceaniaBills = () => db.collection("oceaniaBills").get();

// Interpreta los datos de cada continente y los pinta
africa.addEventListener("click", async (e) => {
    const coinQuery = await getAfricaCoins();
    const billQuery = await getAfricaBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

america.addEventListener("click", async (e) => {
    const coinQuery = await getAmericaCoins();
    const billQuery = await getAmericaBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

antartica.addEventListener("click", async (e) => {
    const coinQuery = await getAntarticaCoins();
    const billQuery = await getAntarticaBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

asia.addEventListener("click", async (e) => {
    const coinQuery = await getAsiaCoins();
    const billQuery = await getAsiaBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

europe.addEventListener("click", async (e) => {
    const coinQuery = await getEuropeCoins();
    const billQuery = await getEuropeBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

oceania.addEventListener("click", async (e) => {
    const coinQuery = await getOceaniaCoins();
    const billQuery = await getOceaniaBills();
    cleanScreen();
    categorize(coinQuery, billQuery);
});

// Limpia la pantalla para volver al menú
backButton.addEventListener("click", (e) => {
    continentsContainer.style.display = "grid";
    backButton.style.display = "none";
    continentCards.innerHTML = "";
});

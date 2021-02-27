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

window.addEventListener("DOMContentLoaded", async (e) => {
    const africaCoins = await getAfricaCoins();
    const africaBills = await getAfricaBills();
    const americaCoins = await getAmericaCoins();
    const americaBills = await getAmericaBills();
    const antarticaCoins = await getAntarticaCoins();
    const antarticaBills = await getAntarticaBills();
    const asiaCoins = await getAsiaCoins();
    const asiaBills = await getAsiaBills();
    const europeCoins = await getEuropeCoins();
    const europeBills = await getEuropeBills();
    const oceaniaCoins = await getOceaniaCoins();
    const oceaniaBills = await getOceaniaBills();
    searchCoins(africaCoins, americaCoins, antarticaCoins, asiaCoins, europeCoins, oceaniaCoins);
    searchBills(africaBills, americaBills, antarticaBills, asiaBills, europeBills, oceaniaBills);
});

const searchCoins = (africa, america, antartica, asia, europe, oceania) => {
    console.log("Las 4 monedas con más likes");
};
const searchBills = (africa, america, antartica, asia, europe, oceania) => {
    console.log("Los 3 billetes con más likes");
};

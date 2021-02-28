// Trae la base de datos
const db = firebase.firestore();

// Trae los datos desde las colecciones de Firebase
const getFeaturedCoins = () => db.collection("featuredCoins").get();
const getFeaturedBills = () => db.collection("featuredBills").get();

window.addEventListener("DOMContentLoaded", async (e) => {
    const featuredCoins = await getFeaturedCoins();
    const featuredBills = await getFeaturedBills();
    paintFeatured(featuredCoins, featuredBills);
});

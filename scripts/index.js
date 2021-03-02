// Trae los datos desde las colecciones de Firebase
const getFeaturedCoins = () => db.collection("featuredCoins").get();
const getFeaturedBills = () => db.collection("featuredBills").get();
const getRecentCoins = () => db.collection("recentCoins").get();
const getRecentBills = () => db.collection("recentBills").get();

window.addEventListener("DOMContentLoaded", async (e) => {
    const featuredCoins = await getFeaturedCoins();
    const featuredBills = await getFeaturedBills();
    const recentCoins = await getRecentCoins();
    const recentBills = await getRecentBills();
    paintFeatured(featuredCoins, featuredBills);
    paintRecent(recentCoins, recentBills);
});

// // Actualizar los billetes más recientes
// const updateRecentBills = (nuevo) => {
//     let ultimo = db.collection("recentBills").orderBy("created", "asc").limit(1).get();

//     //Se borra el más antiguo (primero en asc)
//     db.collection("recentBills")
//         .doc(ultimo.id)
//         .delete()
//         .then(() => {
//             console.log("Document successfully deleted!");
//         })
//         .catch((error) => {
//             console.error("Error removing document: ", error);
//         });

//     //Se añade el que se acaba de crear
//     db.collection("recentBills")
//         .doc(nuevo.id)
//         .set({
//             ID: nuevo.data().ID,
//             back: nuevo.data().back,
//             barter: nuevo.data().barter,
//             country: nuevo.data().country,
//             created: nuevo.data().created,
//             denomsymbol: nuevo.data().denomsymbol,
//             denomvalue: nuevo.data().denomvalue,
//             front: nuevo.data().front,
//             likes: nuevo.data().likes,
//             year: nuevo.data().year,
//         })
//         .then(() => {
//             console.log("Document successfully written!");
//         })
//         .catch((error) => {
//             console.error("Error writing document: ", error);
//         });
// };

// // Actualizar las monedas más recientes
// const updateRecentCoins = (nuevo) => {
//     let ultimo = db.collection("recentCoins").orderBy("created", "asc").limit(1).get();

//     //Se borra el más antiguo (primero en asc)
//     db.collection("recentCoins")
//         .doc(ultimo.id)
//         .delete()
//         .then(() => {
//             console.log("Document successfully deleted!");
//         })
//         .catch((error) => {
//             console.error("Error removing document: ", error);
//         });

//     //Se añade el que se acaba de crear
//     db.collection("recentCoins")
//         .doc(nuevo.id)
//         .set({
//             ID: nuevo.data().ID,
//             back: nuevo.data().back,
//             barter: nuevo.data().barter,
//             country: nuevo.data().country,
//             created: nuevo.data().created,
//             denomsymbol: nuevo.data().denomsymbol,
//             denomvalue: nuevo.data().denomvalue,
//             front: nuevo.data().front,
//             likes: nuevo.data().likes,
//             year: nuevo.data().year,
//         })
//         .then(() => {
//             console.log("Document successfully written!");
//         })
//         .catch((error) => {
//             console.error("Error writing document: ", error);
//         });
// };

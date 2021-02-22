// Trae los contenedores HTML donde se van a mostrar los cards
const coinsContainer = document.getElementById("coins-container");
const billsContainer = document.getElementById("bills-container");

// Trae algunos elementos que se van a mostrar u ocultar
const continentsContainer = document.getElementById("continents");
const backButton = document.getElementById("back-button");

// Trae los botones de los continentes
const africa = document.getElementById("africa");
const america = document.getElementById("america");
const antartica = document.getElementById("antartica");
const asia = document.getElementById("asia");
const europe = document.getElementById("europe");
const oceania = document.getElementById("oceania");

// // Categoriza las monedas y billetes por continente

// const categorize = (coinQuery, billQuery) => {
//     // Donde se van a guardar las monedas por continente
//     let africa_coins = [],
//         america_coins = [],
//         antartica_coins = [],
//         asia_coins = [],
//         europe_coins = [],
//         oceania_coins = [];

//     // Se recorre cada moneda y se extraen sus datos
//     coinQuery.forEach((doc) => {
//         let coin = [
//             doc.data().front,
//             doc.data().back,
//             doc.data().country,
//             doc.data().denom,
//             doc.data().year,
//             doc.data().likes,
//             doc.data().barter,
//         ];
//         // Según el continente se guarda en la lista
//         switch (doc.data().continent) {
//             case "África":
//                 africa_coins.push(coin);
//                 break;
//             case "América":
//                 america_coins.push(coin);
//                 break;
//             case "Antártida":
//                 antartica_coins.push(coin);
//                 break;
//             case "Asia":
//                 asia_coins.push(coin);
//                 break;
//             case "Europa":
//                 europe_coins.push(coin);
//                 break;
//             case "Oceanía":
//                 oceania_coins.push(coin);
//                 break;
//             default:
//                 break;
//         }
//     });

//     // Donde se van a guardar los billetes por continente
//     let africa_bills = [],
//         america_bills = [],
//         antartica_bills = [],
//         asia_bills = [],
//         europe_bills = [],
//         oceania_bills = [];
//     // Se recorre cada billete y se extraen sus datos
//     billQuery.forEach((doc) => {
//         let bill = [
//             doc.data().front,
//             doc.data().back,
//             doc.data().country,
//             doc.data().denom,
//             doc.data().year,
//             doc.data().likes,
//             doc.data().barter,
//         ];
//         // Según el continente se guarda en la lista
//         switch (doc.data().continent) {
//             case "África":
//                 africa_bills.push(bill);
//                 break;
//             case "América":
//                 america_bills.push(bill);
//                 break;
//             case "Antártida":
//                 antartica_bills.push(bill);
//                 break;
//             case "Asia":
//                 asia_bills.push(bill);
//                 break;
//             case "Europa":
//                 europe_bills.push(bill);
//                 break;
//             case "Oceanía":
//                 oceania_bills.push(bill);
//                 break;
//             default:
//                 break;
//         }
//     });
//     // Devuelve un objeto con las listas de los datos
//     return {
//         africa_coins,
//         america_coins,
//         antartica_coins,
//         asia_coins,
//         europe_coins,
//         oceania_coins,
//         africa_bills,
//         america_bills,
//         antartica_bills,
//         asia_bills,
//         europe_bills,
//         oceania_bills,
//     };
// };

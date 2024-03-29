// Trae los contenedores HTML donde se van a mostrar los cards
const continentCards = document.getElementById("continent-cards");

// Trae algunos elementos que se van a mostrar u ocultar
const continentsContainer = document.getElementById("continents");
const logueo = document.getElementById("logueo");
const agregar = document.getElementById("agregar");
const registro = document.getElementById("crearCuenta")
const backButton = document.getElementById("back-button");
const send = document.getElementById("search");
let iniYear = document.getElementById("iniYear");
let finYear = document.getElementById("finYear");
let iniDen = document.getElementById("iniDen");
let finDen = document.getElementById("finDen");
let country = document.getElementById("country");

// Trae los botones de los continentes
const africa = document.getElementById("africa");
const america = document.getElementById("america");
const antartica = document.getElementById("antartica");
const asia = document.getElementById("asia");
const europe = document.getElementById("europe");
const oceania = document.getElementById("oceania");
const colombia = document.getElementById("colombia");

// Trae los elementos de destacados
const featuredCoinsContainer = document.getElementById("featured-coins");
const featuredBillsContainer = document.getElementById("featured-bills");

// Trae los elementos de las novedades
const recentCoinsContainer = document.getElementById("recent-coins");
const recentBillsContainer = document.getElementById("recent-bills");

// Base de datos
const db = firebase.firestore();
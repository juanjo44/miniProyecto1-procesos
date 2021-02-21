// Template de un coin-card
const coinCardTemplate = (front, back, country, denom, year, likes, barter) => {
    return `
    <div class="coin-card">
        <div class="coin-card-photo">
            <img
                src="${front}"
                alt="Image photo"
            />
        </div>
        <div class="coin-card-data">
            <div class="coin-property">
                <div class="image">
                    <img src="../images/country.svg" alt="Country" />
                </div>
                <p>${country}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="../images/denom.svg" alt="Denomination" />
                </div>
                <p>${denom}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <button class="coin-like">Me gusta</button>
    </div>
    `;
};

// Template de un bill-card
const billCardTemplate = (front, back, country, denom, year, likes, barter) => {
    return `
    <div class="bill-card">
        <div class="bill-card-photo">
            <img
                src="${front}"
                alt="Image photo"
            />
        </div>
        <div class="bill-card-data">
            <div class="bill-property">
                <div class="image">
                    <img src="../images/country.svg" alt="Country" />
                </div>
                <p>${country}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="../images/denom.svg" alt="Denomination" />
                </div>
                <p>${denom}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <button class="bill-like">Me gusta</button>
    </div>
    `;
};

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

// Interpreta los datos de América y los pinta
america.addEventListener("click", async (e) => {
    // Obtiene los datos desde la colección
    const coinQuery = await getCoins();
    const billQuery = await getBills();
    // Limpia la pantalla antes de dibujar los elementos
    coinsContainer.innerHTML = "";
    billsContainer.innerHTML = "";
    continentsContainer.style.display = "none";
    backButton.style.display = "flex";
    // Recorre los documentos (cards) y sus datos los pinta en pantalla
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
backButton.addEventListener("click", async (e) => {
    continentsContainer.style.display = "grid";
    backButton.style.display = "none";
    coinsContainer.innerHTML = "";
    billsContainer.innerHTML = "";
});

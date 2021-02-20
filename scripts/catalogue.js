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

// Trae el contenedor HTML donde se van a mostrar los cards
const cardsContainer = document.getElementById("cards-container");

// Trae los botones para ver las monedas y billetes
const coinButton = document.getElementById("coin-button");
const billButton = document.getElementById("bill-button");

// Trae los datos desde las colecciones de Firebase
const getCoins = () => db.collection("coins").get();
const getBills = () => db.collection("bills").get();

// Interpreta los datos de las monedas y los pinta
coinButton.addEventListener("click", async (e) => {
    // Obtiene los datos desde la colección
    const coinQuery = await getCoins();
    // Limpia la pantalla antes de dibujar los elementos
    cardsContainer.innerHTML = "";
    // Recorre los documentos (cards) y sus datos los pinta en pantalla
    coinQuery.forEach((doc) => {
        cardsContainer.innerHTML += coinCardTemplate(
            doc.data().front,
            doc.data().back,
            doc.data().country,
            doc.data().denom,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });
});

// Interpreta los datos de los billetes y los pinta
billButton.addEventListener("click", async (e) => {
    // Obtiene los datos desde la colección
    const billQuery = await getBills();
    // Limpia la pantalla antes de dibujar los elementos
    cardsContainer.innerHTML = "";
    // Recorre los documentos (cards) y sus datos los pinta en pantalla
    billQuery.forEach((doc) => {
        cardsContainer.innerHTML += billCardTemplate(
            doc.data().front,
            doc.data().back,
            doc.data().country,
            doc.data().denom,
            doc.data().year,
            doc.data().likes,
            doc.data().barter
        );
    });
});

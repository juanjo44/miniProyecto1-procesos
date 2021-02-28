// Template de un coin-card
const coinCardTemplate = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter) => {
    return `
    <div class="coin-card">
        <div class="coin-card-photo">
            <div class="front-photo">
                <img
                    src="${front}"
                    alt="Image photo"
                />
            </div>
            <div class="back-photo">
                <img
                    src="${back}"
                    alt="Image photo"
                />
            </div>
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
                <p>${denomsymbol}${denomvalue}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <button class="coin-like" onclick="addLike(${id})">Me gusta (${likes})</button>
    </div>
    `;
};

// Template de un bill-card
const billCardTemplate = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter) => {
    return `
    <div class="bill-card">
        <div class="bill-card-photo">
            <div class="front-photo">
                <img
                    src="${front}"
                    alt="Image photo"
                />
            </div>
            <div class="back-photo">
                <img
                    src="${back}"
                    alt="Image photo"
                />
            </div>
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
                <p>${denomsymbol}${denomvalue}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <button class="bill-like" onclick="addLike(${id})">Me gusta (${likes})</button>
    </div>
    `;
};

const countryTemplate = (country, coins, bills) => {
    return `
    <div class="country-container">
        <p>${country}</p>
        <div class="country-coins">${coins}</div>
        <div class="country-bills">${bills}</div>
    </div>
    `;
};

const notFoundTemplate = () => {
    return `
    <div class="not-found">
        <p>No hay monedas o billetes aquí</p>
    </div>
    `;
};

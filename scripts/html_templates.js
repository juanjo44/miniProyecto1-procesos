// Template de un coin-card
const coinCardTemplate = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter, continent) => {
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
                <p>${denomsymbol} ${denomvalue}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <div class="coin-barter-like">
            <div class="coin-barter-container">
                <img src="../images/barter.svg">
                <button class="coin-barter">${barter}</button>
            </div>
            <div class="coin-like-container">
                <img src="../images/love.svg">
                <button class="coin-like" data-id="${id}" data-continent="${continent}Coins">${likes}</button>
            </div>
        </div>
    </div>
    `;
};

// Template de un bill-card
const billCardTemplate = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter, continent) => {
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
                <p>${denomsymbol} ${denomvalue}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
        <div class="bill-barter-like">
            <div class="bill-barter-container">
                <img src="../images/barter.svg">
                <button class="bill-barter">${barter}</button>
            </div>
            <div class="bill-like-container">
                <img src="../images/love.svg">
                <button class="bill-like" data-id="${id}" data-continent="${continent}Bills">${likes}</button>
            </div>
        </div>
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

// Templates para index.html
// Template de un coin-card
const coinCardTemplateIndex = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter, continent) => {
    return `
    <div class="coin-card-index">
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
                    <img src="images/country.svg" alt="Country" />
                </div>
                <p>${country}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="images/denom.svg" alt="Denomination" />
                </div>
                <p>${denomsymbol} ${denomvalue}</p>
            </div>
            <div class="coin-property">
                <div class="image">
                    <img src="images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
    </div>
    `;
};

// Template de un bill-card
const billCardTemplateIndex = (id, front, back, country, denomsymbol, denomvalue, year, likes, barter, continent) => {
    return `
    <div class="bill-card-index">
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
                    <img src="images/country.svg" alt="Country" />
                </div>
                <p>${country}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="images/denom.svg" alt="Denomination" />
                </div>
                <p>${denomsymbol} ${denomvalue}</p>
            </div>
            <div class="bill-property">
                <div class="image">
                    <img src="images/year.svg" alt="Year" />
                </div>
                <p>${year}</p>
            </div>
        </div>
    </div>
    `;
};

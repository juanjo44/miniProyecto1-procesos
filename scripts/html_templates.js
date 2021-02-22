// Template de un coin-card
const coinCardTemplate = (front, back, country, denomsymbol, denomvalue, year, likes, barter) => {
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
                <p>${denomsymbol}${denomvalue}</p>
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
const billCardTemplate = (front, back, country, denomsymbol, denomvalue, year, likes, barter) => {
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
                <p>${denomsymbol}${denomvalue}</p>
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

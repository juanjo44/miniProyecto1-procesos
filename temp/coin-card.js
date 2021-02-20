const data = {
    photo:
        "https://cdn.wallapop.com/images/10420/9b/4g/__/c10420p562878815/i1694760812.jpg?pictureSize=W640",
    country: "Colombia",
    denom: "$200",
    year: 2012,
};

let coinCard = `
    <div class="coin-card">
        <div class="coin-card-photo">
            <img
                src="${data.photo}"
                alt="Image photo"
            />
        </div>
        <div class="coin-card-data">
            <div class="property">
                <div class="image">
                    <img src="../images/country.svg" alt="Country" />
                </div>
                <p>${data.country}</p>
            </div>
            <div class="property">
                <div class="image">
                    <img src="../images/denom.svg" alt="Denomination" />
                </div>
                <p>${data.denom}</p>
            </div>
            <div class="property">
                <div class="image">
                    <img src="../images/year.svg" alt="Year" />
                </div>
                <p>${data.year}</p>
            </div>
        </div>
        <button class="like">Me gusta</button>
    </div>
`;

// document.body.innerHTML = coinCard;

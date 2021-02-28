const signInForm = document.querySelector('#signin-form');
const addNewBill = document.querySelector('#addBill-form');
const addNewCoin = document.querySelector('#addCoin-form');

//Get the information and logging
signInForm.addEventListener('submit', e =>{
    e.preventDefault();
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;

    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        signInForm.reset();
    })
})

addNewBill.addEventListener('submit', e => {

    e.preventDefault();
    const country = document.querySelector('#countriesBill').value;
    const year = document.querySelector('#addYearBill').value;
    const den = document.querySelector('#addDenBill').value;
    const front = document.querySelector('#formFileFrontBill').value;
    const back = document.querySelector('#formFileBackBill').value;

    console.log(country, year, den, front, back);
})

addNewCoin.addEventListener('submit', e => {

    e.preventDefault();
    const country = document.querySelector('#countriesCoin').value;
    const year = document.querySelector('#addYearCoin').value;
    const den = document.querySelector('#addDenCoin').value;
    const front = document.querySelector('#formFileFrontCoin').value;
    const back = document.querySelector('#formFileBackCoin').value;

    console.log(country, year, den, front, back);
})

//Events

auth.onAuthStateChanged(user => {
    if (user){
        cleanScreenLogin();
        agregar.style.display = "flex";
        fillCountryOptions2()
    } else{
        cleanScreenAgregar();
    }
})

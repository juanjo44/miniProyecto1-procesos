const signInForm = document.querySelector('#signin-form');
const signUpForm = document.querySelector('#signup-form')
const addNewBill = document.querySelector('#addBill-form');
const addNewCoin = document.querySelector('#addCoin-form');
const logout = document.querySelector('#logout');
const changeToLogin = document.querySelector("#changeToLogin");
const changeToRegister = document.querySelector('#changeToRegister');
let userEmail = "";
//Get the information and logging
signInForm.addEventListener('submit', e =>{
    e.preventDefault();
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;
    userEmail = email
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        signInForm.reset();
    })
})

//Get the information and signup
signUpForm.addEventListener('submit', e =>{
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            signUpForm.reset();
        })
})


logout.addEventListener('click', e =>{
    e.preventDefault();
    auth.signOut().then(() =>{
    })
    location.reload();
})

changeToLogin.addEventListener('click', e => {
    e.preventDefault();
    cleanScreenSignUp();
    cleanScreenAgregar();
    logueo.style.display = "flex";
    
})
changeToRegister.addEventListener('click', e => {
    e.preventDefault();
    cleanScreenLogin();
    cleanScreenAgregar();
    registro.style.display = "flex";
})

addNewBill.addEventListener('submit', async (e) => {

    e.preventDefault();
    const country = document.querySelector('#countriesBill').value;
    const year = document.querySelector('#addYearBill').value;
    const denType = document.querySelector('#addDenTypeBill').value;
    const den = document.querySelector('#addDenBill').value;
    const front = document.querySelector('#formFileFrontBill').files[0];
    const back = document.querySelector('#formFileBackBill').files[0];
    addNewElement(userEmail, country, year,denType ,den, front, back, "B");
    //alert("El billete de " + country + " de " + denType + den + " de " + year + " ha sido cargado al catálogo con éxito");
})

addNewCoin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const country = document.querySelector('#countriesCoin').value;
    const year = document.querySelector('#addYearCoin').value;
    const denType = document.querySelector('#addDenTypeCoin').value;
    const den = document.querySelector('#addDenCoin').value;
    const front = document.querySelector('#formFileFrontCoin').files[0];
    const back = document.querySelector('#formFileBackCoin').files[0];

    addNewElement(userEmail, country, year, denType, den, front, back,"C");
    //alert("La moneda de " + country + " de " + denType + den + " de " + year + " ha sido cargado al catálogo con éxito");
})

//Events

auth.onAuthStateChanged(user => {
    if (user){
        cleanScreenLogin();
        cleanScreenSignUp();
        agregar.style.display = "flex";
        fillCountryOptions2();
    } else{
        cleanScreenAgregar();
        cleanScreenSignUp();
    }
})
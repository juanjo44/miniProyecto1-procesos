const signInForm = document.querySelector('#signin-form');

//Get the information and logging
signInForm.addEventListener('submit', e =>{
    e.preventDefault();
    const email = document.querySelector('#signin-email').value;
    const password = document.querySelector('#signin-password').value;

    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
        console.log("Hey");
        signInForm.reset()
    })
})

//Events

auth.onAuthStateChanged(user => {
    if (user){
        cleanScreenLogin();
        agregar.style.display = "flex";
        console.log('signin')
    } else{
        cleanScreenAgregar();
        console.log('Sign out')
    }
})

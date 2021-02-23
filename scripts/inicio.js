const signInForm = document.querySelector('#signin-form');

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
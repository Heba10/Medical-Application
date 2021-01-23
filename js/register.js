function closealert() {
    document.querySelector('.alert').style.display = 'none';
}

//registar
let registerForm = document.forms["register"];


if (registerForm) {

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (registerForm["password"].value == registerForm["passwordConfirmation"].value) {
            sessionStorage.setItem("username", registerForm["username"].value);
            sessionStorage.setItem("password", registerForm["password"].value);
            sessionStorage.setItem("birthDate", registerForm["birthDate"].value);

            window.location.href = "index.html";
        } else {
            document.querySelector('.alert').style.display = 'block';
        }
    })

}

//login
let loginForm = document.forms["login"];
if (loginForm) {

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (loginForm["password"].value == sessionStorage.getItem("password") &&
            loginForm["username"].value == sessionStorage.getItem("username")) {

            if (loginForm["rememberme"].checked) {
                localStorage.setItem("username", loginForm["username"].value);
                localStorage.setItem("password", loginForm["password"].value);
            }

            window.location.href = "form1.html";
        } else {
            document.querySelector('.alert').style.display = 'block';
        }
    })

}
//hash pasword
// function mySubmit(obj) {
//     var pwdObj = document.getElementById('password');
//     var hashObj = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
//     hashObj.update(pwdObj.value);
//     var hash = hashObj.getHash("HEX");
//     pwdObj.value = hash;
// }
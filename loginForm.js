document.title = "MY LOGIN FORM";
const emailEl = document.getElementById("email-el");
const passwordEl = document.getElementById("password-el");
const sendLogin = document.getElementById("sendLogin");

let myEmails = localStorage.getItem("myEmails");
let myPassword = localStorage.getItem("myPassword");

emailEl.value = myEmails;
passwordEl.value = myPassword;

sendLogin.addEventListener("click", function () {
    checkPassword()
    localStorage.setItem("myEmails", JSON.stringify(emailEl.value));
    localStorage.setItem("myPassword", JSON.stringify(passwordEl.value));
})

function checkPassword() {
    let myEmail = "gakizadivin1@gmail.com";
    let choosenPassword = "12345678";
    if (emailEl.value == myEmail && passwordEl.value == choosenPassword) {
        window.alert("Welcome!");
    } else if (emailEl.value == myEmail && passwordEl.value != choosenPassword) {
        window.alert("Wrong password!\n\nTry again");
    } else if (emailEl.value != myEmail && passwordEl.value == choosenPassword) {
        window.alert("Wrong Email!\n\ncheck your Email well and try again!");
    } else {
        window.alert("Wrong email and password!\n\nType again your user email and password!");
    }
}
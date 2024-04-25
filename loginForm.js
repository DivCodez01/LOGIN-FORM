document.title = "MY LOGIN FORM";
const emailEl = document.getElementById("email-el");
const passwordEl = document.getElementById("password-el");
const sendLogin = document.getElementById("sendLogin");
sendLogin.addEventListener("click", function () {
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
})
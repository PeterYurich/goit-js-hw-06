const formEl = document.querySelector(".login-form");
const emailInputEl = document.querySelector("[name=email]");
const passwordInputEl = document.querySelector("[name=password]");

formEl.addEventListener('submit', formSubmitHandler)

function formSubmitHandler(event) {
    event.preventDefault();

    if (emailInputEl.value === "" || passwordInputEl.value === "") {
        alert("Every input has to be filled in")
    };

    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    const formValues = {
        email: emailValue,
        password: passwordValue,
    }
}
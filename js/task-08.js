const form = document.querySelector(".login-form");
const emailInputEl = document.querySelector("[name=email]");
const passwordInputEl = document.querySelector("[name=password]");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (emailInputEl.value === "" || passwordInputEl.value === "") {
        alert("Every input has to be filled in")
    }
    const {
        
    }
})

// 
// console.log(submitBtnEl)
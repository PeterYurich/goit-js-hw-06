const  inputEl = document.querySelector("#name-input");

let outputEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        outputEl.textContent = "Anonymous";
    } else
    document.querySelector("#name-output").textContent = event.currentTarget.value;
    // outputElValue = inputEl.value;
})
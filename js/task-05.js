const  inputEl = document.querySelector("#name-input");

const outputElValue = document.querySelector("#name-output").textContent;

inputEl.addEventListener('input', (event) => {
    if (event.currentTarget.value === "") {
        document.querySelector("#name-output")
        .textContent = "Anonymous";
    } else
    document.querySelector("#name-output").textContent = event.currentTarget.value;
    // outputElValue = inputEl.value;
})
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
    inputEl.classList.add("invalid")
    inputEl.classList.remove("valid")
if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid")
    inputEl.classList.remove("invalid")
}
});
//Это код по шагам, прописанным в задании, но так кнопки не работают:

let counterValue = 0;

const decrementBtnEl = document.querySelector
    ('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector
    ('button[data-action="increment"]');

decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1
    document.querySelector("#value").textContent = counterValue;
})

incrementBtnEl.addEventListener('click', () => {
    counterValue += 1
    document.querySelector("#value").textContent = counterValue;
})
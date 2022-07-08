//Это код по шагам, прописанным в задании, но так кнопки не работают:
 
// let counterValue = 0;
// document.querySelector("#value").innerHTML = counterValue;

// const decrementBtnEl = document.querySelector
// ('button[data-action="decrement"]');
// const incrementBtnEl = document.querySelector
// ('button[data-action="increment"]');

// decrementBtnEl.addEventListener('click', () => {
//     counterValue -= 1
// })

// incrementBtnEl.addEventListener('click', () => {
//     counterValue = Number(counterValue.textContent) + 1
// })

// Так работают кнопки:

const counterValue = document.querySelector("#value");

const decrementBtnEl = document.querySelector
('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector
('button[data-action="increment"]');

decrementBtnEl.addEventListener('click', () => {
    counterValue.textContent -= 1
})

incrementBtnEl.addEventListener('click', () => {
    counterValue.textContent = Number(counterValue.textContent) + 1
})


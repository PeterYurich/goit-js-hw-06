function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainerEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

// создание дивов:

const createBoxes = () => {
  console.log('the function "createBoxes" has started')

  const amount = document.querySelector("[type=number]").value;

  const boxesArray = [];

  for (let i = 0; i <= amount; i += 1) {
    let box = document.createElement("div");
    boxesArray.push("<div></div>");
    }

  boxContainerEl.insertAdjacentHTML("afterbegin", boxesArray.join(""));

  // проверка создания в консоле
  // const boxesElArray = [...boxContainerEl.children];
  // console.log(boxesElArray);

  // изменение цвета:

  const boxesEls = boxContainerEl.children;
  console.log(boxesEls)
  // boxesEls.forEach(function paintBoxes (boxEl, index) {
  // boxEl.classList.add("df")
  // console.log(`${boxEl} has index ${index}`)
// });

console.log('the function "createBoxes" has finished')
}


createBtnEl.addEventListener('click', createBoxes);

// очистка:

destroyBtnEl.addEventListener('click', () => {
  boxContainerEl.innerHTML = ''
})
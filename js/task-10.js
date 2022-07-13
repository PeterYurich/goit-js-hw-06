function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainerEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');


const createBoxes = () => {
  const amount = document.querySelector("[type=number]").value;
  const boxesArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${20 + (10 * i)}px`
    box.style.height = `${20 + (10 * i)}px`
    const randomColor = getRandomHexColor()
    box.style.backgroundColor = `${randomColor}`;
    boxesArray.push(box)
    }

    boxContainerEl.append(...boxesArray);
}
createBtnEl.addEventListener('click', createBoxes);


destroyBtnEl.addEventListener('click', () => {
  boxContainerEl.innerHTML = ''
})
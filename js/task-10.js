function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxContainerEl = document.querySelector("#boxes");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

// const boxAmount = document.querySelector("[type=number").value;

// console.log(boxAmount)


const createBoxes = () => {
  console.log('the function is done')

  const amount = document.querySelector("[type=number").value;

  const boxesArray = [];

  for (let i = 0; i <= amount; i += 1) {
    let box = document.createElement("div");
    boxesArray.push("<div></div>");
  }

  boxContainerEl.insertAdjacentHTML("afterbegin", boxesArray.join(""));

  // 

  const boxesElArray = [...boxContainerEl.children]

  console.log(boxesElArray)
}

createBtnEl.addEventListener('click', createBoxes)





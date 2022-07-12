function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorValueEl = document.querySelector(".color")


const changeColorHandler = () => {

  const randomColor = getRandomHexColor()

  bodyEl.style.backgroundColor = `${randomColor}`;
  colorValueEl.textContent = `${randomColor}`;

}

changeColorBtnEl.addEventListener('click', changeColorHandler);
   
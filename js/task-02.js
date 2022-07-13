const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEls = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li")
  ingredientEl.textContent = `${ingredient}`
  ingredientEl.classList.add("item")
  return ingredientEl
})

document.querySelector("#ingredients").append(...ingredientsEls)

console.log(document.querySelectorAll(".item"))
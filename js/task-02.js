const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// function makeIngridientEl (ingredient) {
//   const ingredientEl = document.createElement("li")
//   ingredientEl.textContent = `${ingredient}`
//   ingredientEl.classList.add("item")
//   ingredientsEls.push(ingredientEl)
// }

const ingredientsEls = []
ingredients.forEach(function (ingredient)  {
  const ingredientEl = document.createElement("li")
  ingredientEl.textContent = `${ingredient}`
  ingredientEl.classList.add("item")
  ingredientsEls.push(ingredientEl)
})
// лучше будет так написать функцию для forEach или лучше было 
// бы вынести её в makeIngridientEl и передать колбеком в forEach?

document.querySelector("#ingredients").append(...ingredientsEls)


// experiment: (почему через map получается коллекция из шести undefind ?)

// const ingredientsEls = ingredients.map((ingredient) => {
//   const ingredientEl = document.createElement("li")
//   ingredientEl.textContent = `${ingredient}`
//   ingredientEl.classList.add("item")
// })

// document.querySelector("#ingredients").append(...ingredientsEls)

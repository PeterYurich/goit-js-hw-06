// underTask-1

const categoriesElArray = document.querySelectorAll('.item')
console.log(`Number of categories: ${categoriesElArray.length}`)

// experiment:

// function categoriesCounter () {
// const categoriesElArray = document.querySelectorAll('.item')
// return categoriesElArray.length
// }

// function getCategoriesAmount () {
//     return console.log(`Number of categories: ${categoriesCounter()}`)

// }

// getCategoriesAmount()

// underTask-2

categoriesElArray.forEach(function (category) {
const categoryName = category.firstElementChild.textContent
// console.log(categoryName)
console.log(`Category: ${categoryName}`)
const subjects = category.lastElementChild.children
console.log(`Elements: ${subjects.length}`)
})

import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []

export const ProductList = () => {
  // debugger
  getProducts()
    .then(getCategories)
    .then(() => {
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)

    return Product(product, productCategory)
  }).join("")
}

eventHub.addEventListener("categorySelected", event => {
  const catId = parseInt(event.detail.selectedCategory)
  bakeryProducts = useProducts()
  bakeryCategories = useCategories()

  const matchingCategories = bakeryCategories.find(category => category.id === catId)
  const matchingProducts = bakeryProducts.filter(product => product.categoryId === catId)

})
 

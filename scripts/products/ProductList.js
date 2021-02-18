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
  const catId = event.detail.selectedCategory
  if(catId !== "0") {
    bakeryProducts = useProducts().filter(product => product.categoryId === +catId)
    // + means parseInt, but don't do it, Scort's orders.
    render()
  } else {
    bakeryProducts = useProducts()
    render()
  }
  
})
 

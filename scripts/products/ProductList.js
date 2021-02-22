import { getProducts, useProducts } from "./ProductProvider.js"
import { getCategories, useCategories } from "../categories/CategoryProvider.js"
import { Product } from "./Product.js"
import { getReviews, useReviews } from "../reviews/ReviewProvider.js"
import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"

const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".menu__items")

let bakeryProducts = []
let bakeryCategories = []
let bakeryReviews = []
let customers = []

export const ProductList = () => {
  // debugger
  getProducts()
    .then(getCategories)
      .then(getReviews)
      .then(getCustomers)
    .then(() => {
      bakeryProducts = useProducts()
      bakeryCategories = useCategories()
      bakeryReviews = useReviews()
      customers = useCustomers()
      render()
    })
}

const render = () => {
  contentTarget.innerHTML = bakeryProducts.map(product => {
    const productCategory = bakeryCategories.find(category => category.id === product.categoryId)
    const productReviews = bakeryReviews.filter(review => review.productId === product.id)
    return Product(product, productCategory, productReviews, customers)
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
 

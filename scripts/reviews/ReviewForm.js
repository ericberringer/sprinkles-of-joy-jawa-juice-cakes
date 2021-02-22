import { getCustomer } from "../customers/CustomerProvider.js"
import { getProducts, useProducts } from "../products/ProductProvider.js"


const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector("#container")

let productsArray = []

export const renderReviewForm = (products, customer) => {
    
    contentTarget.innerHTML = `
    <section class="reviewInput">
    <fieldset>
    <h3>Write A Review</h3>
    <form action="">    
        <fieldset>
        <label htmlFor="review-author">Name: </label>
            <input type="text" placeholder="Name" id="review-author">
        </fieldset>  
        <fieldset>
        <label for="productDropdown">Product:</label>
            <select class="productDropdown" id="productDropdown">
                <option value="0">Select a product...</option>
                ${products.map(product => `<option value="${product.id}">${product.name}</option>`).join("")}
            </select>
        </fieldset>  
        <fieldset>
                <label for="reviewSelect">Rating:</label>
                <select class="reviewSelect" id="reviewSelect">
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    
                </select>
        </fieldset>
        <fieldset>
        <label htmlFor="review-text">Review: </label>
            <textarea placeholder="Your Review Here" id="review-text" rows="4" cols="50"></textarea>
        </fieldset>
        <fieldset>
            <label htmlFor="review-date">Date: </label>
            <input type="date" placeholder="Date" id="review-date">
        </fieldset>
    </form>
    <fieldset>
    <button id="saveReview">Save Review</button>
    </fieldset>
    </fieldset>
    </section>
    `
    // <h4>${productObject.name}</h4>
}

// Not finished, need to return to this and pass a product object in here
// to give us the details specific to each product.


const ProductSelect = () => {
    getProducts()
        .then(() => {
            productsArray = useProducts()
            renderReviewForm(productsArray)
            })
}

eventHub.addEventListener("showNewReviewForm", event => {
    ProductSelect()
})



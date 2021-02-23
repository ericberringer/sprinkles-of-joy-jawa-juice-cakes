import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"
import { renderReviewForm } from '../reviews/ReviewForm.js'
import { ReviewAverage } from '../reviews/ReviewAverage.js'
import { Review } from "../reviews/Review.js"
import { deleteReview, getReviews, useReviews, dispatchStateChangeEvent } from "../reviews/ReviewProvider.js"
import { authHelper } from '../auth/authHelper.js'
import { ProductList } from '../products/ProductList.js'



const eventHub = document.querySelector("#container")
const modalTarget = document.querySelector(".modalContainer")

export const Product = (product, category, reviews, customers) => {
    const reviewsWithCustomers = reviews.map(review => {
        const customer = customers.find(customer => customer.id === review.customerId)
        return {
            review: review,
            customer: customer
        }
    })
    return `
        <section class="baked_good">
            <header class="baked_good__header">
                <div class="prodNameCat">  
                    <h4>${product.name}</h4>
                    <h6>${category.name}</h6>
                </div>
                <p>$${product.price}</p>
            </header>
            <div>
                <button id="addProduct--${product.id}">Add to Cart</button>
                <p>${product.description}</p>
            </div>
            <div class="reviewContainer">
                ${reviewsWithCustomers.map(review => Review(review)).join("")}
            </div>
        </section>
        `
}

// Adding to cart
eventHub.addEventListener("click", evt => {
    if (evt.target.id.startsWith("addProduct--")) {
        const [prefix, productId] = evt.target.id.split("--")
        const addProductEvent = new CustomEvent("addToCart", {
            detail: {
                addedProduct: parseInt(productId)
            }
        })
        eventHub.dispatchEvent(addProductEvent)
    }
})


// WRITING a review
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("addReview--")) {
        renderReviewForm()
    }
})



// Review Modal Listener
eventHub.addEventListener("viewReview", event => {
    const reviewId = parseInt(event.detail.reviewId)
    // console.log('reviewId: ', reviewId);
    
    getCustomers()
        .then(getReviews)
            .then(() => {
                const customers = useCustomers()
                const reviews = useReviews()

                const matchingReview = reviews.find(rev => rev.id === reviewId)
                const matchingCustomer = customers.find(matchingCustomer => matchingCustomer.id === matchingReview.customerId)

                ReviewModal(matchingReview, matchingCustomer)
            })
})


// Modal Constructor
export const ReviewModal = (review, customer) => {
    // Check if current user is review author
    const currentCustomerId = parseInt(authHelper.getCurrentUserId())
    
    let ReviewHTMLRepresentation = ""
    
    if(customer.id === currentCustomerId) {
        ReviewHTMLRepresentation = `
        
        <div id="review_modal" class="modal--parent">
                <div class="modal--content">
                    <h2>${customer.name} says:</h2>
                    <h3 class="review__rating">Rating: ${review.rating}</h3>
                    <p class="review__text">${review.text}</p>
            
                    <button id="modal__close">Close</button>
                    <button id="delete__review--${review.id}">Delete</button>
                </div>
            </div>
        
        `

        
    } else {
        
        ReviewHTMLRepresentation = 
            `
            <div id="review_modal" class="modal--parent">
                <div class="modal--content">
                    <h2>${customer.name} says:</h2>
                    <h3 class="review__rating">Rating: ${review.rating}</h3>
                    <p class="review__text">${review.text}</p>
            
                    <button id="modal__close">Close</button>
                </div>
            </div>
            `

    }


        modalTarget.innerHTML = ReviewHTMLRepresentation
}

// Review Modal Close
eventHub.addEventListener("click", event => {
    if (event.target.id === "modal__close") {
        closeModal()
    }
})

// Modal close action
const closeModal = () => {
    modalTarget.innerHTML = ""
}



// Delete Review Listener
eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("delete__review--")){
        const [prefix, suffix] = event.target.id.split("--")

    deleteReview(suffix)
    .then(useReviews)
    .then(dispatchStateChangeEvent)
    .then(ProductList)
    
    
    }
    closeModal()

})
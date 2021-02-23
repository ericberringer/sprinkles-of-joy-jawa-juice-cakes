import { authHelper } from '../auth/authHelper.js'
import { getCustomer } from '../customers/CustomerProvider.js'
import { deleteReview, useReviews } from "./ReviewProvider.js"

const eventHub = document.querySelector('#container')
const reviewModalElement = document.querySelector('.reviewContainer')

const reviewStars = [
    "",
    "1",
    "2",
    "3",
    "4",
    "5"
]


export const Review = (reviewWithCustomer) => {
    return `
        <div class="review">
            <button class="review__rating" id="review__rating--${reviewWithCustomer.review.id}"> Customer Rating: ${reviewWithCustomer.review.rating}</button>
            <strong>
                <p class="review__name">Customer Name: ${reviewWithCustomer.customer.name}</p>
            </strong>
            <p>Review: ${reviewWithCustomer.review.text}</p>
        </div>
            `   
}


eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("review__rating--")){
        const [prefix, suffix] = event.target.id.split("--")

        const customEvent = new CustomEvent ("viewReview", {
            detail: {
                reviewId: suffix
            }
        })

        eventHub.dispatchEvent(customEvent)
    }
})
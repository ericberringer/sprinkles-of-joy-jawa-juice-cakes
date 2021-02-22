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
            <p class="review__rating" id="review__rating--${reviewWithCustomer.review.id}"> Customer Rating: ${reviewWithCustomer.review.rating}</p>
            <strong>
                <p class="review__name">Customer Name: ${reviewWithCustomer.customer.name}</p>
            </strong>
            <p>Review: ${reviewWithCustomer.review.text}</p>
        </div>
            `   
}
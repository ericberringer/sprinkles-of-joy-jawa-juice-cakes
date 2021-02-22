import { authHelper } from '../auth/aithHelper.js'
import { getCustomer } from '../customers/CustomerProvider.js'
import { deleteReview, useReviews } from "./ReviewProvider.js"

const eventHub = document.querySelector('#container')
const reviewModalElement = document.querySelector('.reviewContainer')

export const Review = (reviewWithCustomer) => {
    return `
        <div class="review">
            <p class="review__rating" id="review__rating--${reviewWithCustomer.review.id}">${reviewStars[reviewWithCustomer.review.rating]}</p>
            <strong>
                <p class="review__name">${reviewWithCustomer.customer.name}</p>
            </strong>
        </div>
            `   
}
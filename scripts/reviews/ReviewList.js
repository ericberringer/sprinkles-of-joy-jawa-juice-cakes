import { useReviews, getReviews } from "./ReviewProvider.js"


const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".reviewContainer")

export const ReviewList = () => {
    getReviews()
        .then (() => {
            const review = useReviews()
            // input render function here
        })
}

const renderReview = () => {
    
}
import { useReviews, getReviews } from "./ReviewProvider.js"

export const ReviewAverage = (product) => {
    getReviews()
        .then(() => {
            const allReviews = useReviews()
            const productReviews = allReviews.filter(review => review.productId === product.id)
            if (productReviews.length = 0) {
                return `<p>No Reviews Yet</p>`
            } else {
                let ratings = []
                let ratingsToAverage = productReviews.map(element => ratings.push(element.rating))
                let total = 0
                for (let i = 0; i < ratings.length; i++) {
                total += ratings[i]
            }
            const average = total / ratings.length
            return `
            <button id="rating--${product.id}">Average Customer Rating: ${average}</button>`            
        }
    })
}

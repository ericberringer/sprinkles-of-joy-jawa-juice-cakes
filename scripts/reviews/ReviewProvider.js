import { bakeryAPI } from '../Settings.js'


let reviews = []


const eventHub = document.querySelector(".container")


export const getReviews = () => {
    return fetch(`${bakeryAPI.baseURL}/reviews`)
    .then(response => response.json())
    .then(parsedReviews => {
        console.log(parsedReviews)
        reviews = parsedReviews
    })
}

export const useReviews = () => {
    return reviews.slice()
}

export const saveReviews = review => {
    let stringifiedObj = JSON.stringify(review)
    return fetch('http://localhost:8088/reviews', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getReviews) // fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) // tell any component listening that the notes state has been updated
}


export const dispatchStateChangeEvent = () => {
    const reviewStateChanged = new CustomEvent("reviewStateChanged")

    eventHub.dispatchEvent(reviewStateChanged)
}

export const deleteReview = reviewId => {
    return fetch(`http://localhost:8088/notes/${reviewId}`, {
        method: "DELETE"
    })
        .then(getReviews)
}
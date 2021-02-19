

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector(".container")

export const render = (productObject) => {
    contentTarget.innerHTML = `
    <h3>Write A Review</h3>
    <form action="">    
    <label htmlFor="review-author">Name: </label>
    <input type="text" placeholder="Name" id="review-author">
    <label htmlFor="review-text">Review: </label>
    <input type="text" placeholder="Write Review Here" id="review-text">
    <label htmlFor="review-date">Date: </label>
    <input type="date" placeholder="Date" id="review-date">
    
    </form>
    `
    // <h4>${productObject.name}</h4>
}

// Not finished, need to return to this and pass a product object in here
// to give us the details specific to each product.
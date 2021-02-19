

const contentTarget = document.querySelector(".reviewForm")
const eventHub = document.querySelector(".container")

export const renderReviewForm = () => {
    debugger
    contentTarget.innerHTML = `
    <section class="reviewInput">
    <h3>Write A Review</h3>
    <form action="">    
        <label htmlFor="review-author">Name: </label>
            <input type="text" placeholder="Name" id="review-author">
        <label for="reviewSelect">Rating</label>
            <select class="reviewDropdown" id="reviewSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        <label htmlFor="review-text">Review: </label>
            <input type="text" placeholder="Write Review Here" id="review-text">
        <label htmlFor="review-date">Date: </label>
            <input type="date" placeholder="Date" id="review-date">
    
    </form>
    </section>
    `
    // <h4>${productObject.name}</h4>
}

// Not finished, need to return to this and pass a product object in here
// to give us the details specific to each product.
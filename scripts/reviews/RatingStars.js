const eventHub =document.querySelector(".container")
contentTarget = document.querySelector(".reviewContainer")

export const RatingStars = (product) => {
    
    contentTarget.innerHTML = `
    
    <div class="rate" id="rating--${product.id}">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">1 star</label>
    </div>`
}

eventHub.addEventListener("change", changeEvent => {
    if(changeEvent.target.id.startsWith("rating--")){
        const [prefix, suffix] = changeEvent.target.id.split("--")
        const ratingEvent = new CustomEvent("useRating", {
            detail: {
                userRating: 
            }
        })
    }
})

// ! Don't import this to main while it's broken
const eventHub = document.querySelector("#container")

export const Product = (product, category) => {
    return `
      <section class="baked_good">
            <header class="baked_good__header">
            <div class="prodNameCat">  
            <h4>${product.name}</h4>
            <h6>${category.name}</h6>
            </div>s
              <p>$${product.price}</p>
            </header>
          <div>
              <button id="addProduct--${product.id}">Add to Cart</button>
              <p>${product.description}</p>
          </div>
          <div>
              <button id="addReview--${product.id}">Write a Review</button>
          </div>
          <div class="reviewDiv">
            <div class="reviewButtonContainer"></div>
            <article class="reviewForm"></article>
            <div class="reviewContainer"></div>
          </div>
      </section>
  `
}

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

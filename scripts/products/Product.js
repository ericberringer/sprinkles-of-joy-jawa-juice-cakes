import { getCustomers, useCustomers } from "../customers/CustomerProvider.js"

const eventHub = document.querySelector("#container")

export const Product = (product, category) => {
    return `
      <section class="baked_good">
            <header class="baked_good__header">
            <div class="prodNameCat">  
            <h4>${product.name}</h4>
            <h6>${category.name}</h6>
            </div>
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


// eventHub.addEventListener("click", clickEvent => {

    
//     if (clickEvent.target.id.startsWith === "addReview") {
//         clickEvent.preventDefault()
//         const [prefix, productId] = clickEvent.target.id.split("--")
        
//         const reviewText = document.querySelector("#review-text").value
//         const reviewDate = document.querySelector("#review-date").value
//         const customer = document.querySelector("#review-author").value // gives us name, we need ID
//         const product = parseInt(productId)
        
//         getCustomers()
//         .then(customersArray = useCustomers())
//         .then(() => {
            
            
            
                    
                    
//                     const matchingCustomer = customersArray.find(customer => customersArray.name === customer)
// // ! Need to have authentication done before we do this so we can call getCustomer(id) and find the specific customer to put into this customerId field. 
// // ! Maybe need to make a conditional to check if the user is already a customer. Let's move forward assuming they are and refactor a conditional later.

//                 })


//         const newReview = {
//             "text": reviewText,
//             "rating" ,
//             "customerId": matchingCustomer.id,
//             "productId": product,
//             "date": reviewDate,
            

//         }

//         saveReview(newReview)
//     }
// })
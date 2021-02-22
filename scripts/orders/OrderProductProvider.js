import { bakeryAPI } from "../Settings.js"

let orderProducts = []

export const useOrderProducts = () => orderProducts.slice()

//Relationships table
export const getOrderProducts = () => {
  return fetch(`${bakeryAPI.baseURL}/orderProducts`)
    .then(response => response.json())
    .then(apiData => {
      orderProducts = apiData
    })
}

// Post order product relationships to relationships table
export const saveOrderProducts = (orderProductsArray) => {
  const orderProductsPromiseArray = orderProductsArray.map(op => {
    return fetch(`${bakeryAPI.baseURL}/orderProducts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(op)
    })
  })
  return Promise.all(orderProductsPromiseArray)
}

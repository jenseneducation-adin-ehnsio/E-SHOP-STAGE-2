import { showCart } from "../modules/cart-load.js";
import { updateTotalPrice, totalPrice } from "../modules/cart-calc.js";

// * Function for fetching the cart items
const loadCart = () => {
  fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      showCart(data.data); //! Starts function that will add the html and sends data from api
      totalPrice(data.data); // Calculates the total price of cart
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

//! RUNS ON LOAD
loadCart();

// * Removes item, starts on click
export const removeCartItem = id => {
  fetch("/cart/remove/" + id, {
    method: "DELETE"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      let item = document.getElementById("item" + id);
      item.parentNode.removeChild(item); //! Removes item
      updateTotalPrice(); // Updates the total price
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

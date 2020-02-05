import { showProducts } from "../modules/product-load.js";

// * Fetches all products and then start the showProduct() function in modules
const loadProducts = () => {
  fetch("/products")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      showProducts(data.data); //!Starts function that will add the html and sends data from api
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

//! Runs on load
loadProducts();

//* Adds product to cart - Starts on click
export const addToCart = id => {
  fetch("/cart/add/" + id, {
    method: "POST"
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.querySelector(`#button-${id}`).innerHTML = data.message; // Changes text on button
    })
    .catch(error => {
      console.error("Error:", error);
    });
};

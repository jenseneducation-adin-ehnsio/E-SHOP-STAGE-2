import { addToCart } from "../js/shop.js";

// * Main function for adding the products to html
export const showProducts = products => {
  let productFragment = document.createDocumentFragment(); //Elements will be added to this fragment before added to dom

  //*Loops the database and creates one product for every product in the database
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div"); // Parent div
    product.className = "product";

    // Appends to parent div (product)
    addImage(product, products, i);
    addTitle(product, products, i);
    addPrice(product, products, i);
    addButton(product, products, i);

    productFragment.appendChild(product); // Adds the built product to fragment
  }

  document.querySelector(".product-container").appendChild(productFragment); // Writes the products to dom
};

// Appends Image to product
const addImage = (product, products, i) => {
  let productImage = document.createElement("img");
  productImage.src = products[i].img;
  product.appendChild(productImage);
};

// Appends Title to product
const addTitle = (product, products, i) => {
  let productTitle = document.createElement("h2");
  productTitle.innerHTML = products[i].name;
  product.appendChild(productTitle);
};

// Appends Price to product
const addPrice = (product, products, i) => {
  let productPrice = document.createElement("h3");
  productPrice.innerHTML = products[i].price + " kr";
  product.appendChild(productPrice);
};

// Appends Button to product
const addButton = (product, products, i) => {
  let productButton = document.createElement("button");
  productButton.innerHTML = "Add to cart";
  productButton.id = "button-" + i;
  productButton.addEventListener("click", () => {
    addToCart(products[i].id); // Gives the button an eventlistener to add on click
  });
  product.appendChild(productButton);
};

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
const addButton = async (product, products, i) => {
  let productButton = document.createElement("button");
  productButton.id = "button-" + i;
  productButton.innerHTML = "Add to cart";
  checkIfInCart(i); // Changes innerHTML if already added
  productButton.addEventListener("click", () => {
    addToCart(products[i].id); // Gives the button an eventlistener to add on click
  });
  product.appendChild(productButton);
};

// Changes innerHTML of button if it exists in cart
const checkIfInCart = async productId => {
  let cartId = await fetchCartId(productId);
  if (cartId) {
    document.querySelector("#button-" + cartId).innerHTML =
      "Product already in cart";
  }
};

// Returns the cartId if it exists
const fetchCartId = async i => {
  let id;
  await fetch("/cart")
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.data[i]) {
        id = data.data[i].id;
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  return id;
};

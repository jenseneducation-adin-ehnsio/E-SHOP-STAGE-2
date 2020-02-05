import { removeCartItem } from "../js/cart.js";

// * Main function for adding the cart-items to html
export const showCart = cartItems => {
  let cartFragment = document.createDocumentFragment(); //Elements will be added to this fragment before added to dom

  //*Loops the database and creates the items in cart
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = document.createElement("div"); // Parent div
    cartItem.className = "item";
    cartItem.id = "item" + cartItems[i].id; // Unique id for easy removal

    // Appends to parent div (item)
    addImage(cartItem, cartItems, i);
    addTitle(cartItem, cartItems, i);
    addPrice(cartItem, cartItems, i);
    addButton(cartItem, cartItems, i);

    cartFragment.appendChild(cartItem); // Adds the built item to fragment
  }

  document.querySelector(".cart-container").appendChild(cartFragment); // Writes the items to dom
};

// Appends Image to Item
const addImage = (cartItem, cartItems, i) => {
  let itemImage = document.createElement("img");
  itemImage.src = cartItems[i].img;
  cartItem.appendChild(itemImage);
};

// Appends Title to Item
const addTitle = (cartItem, cartItems, i) => {
  let itemTitle = document.createElement("h2");
  itemTitle.innerHTML = cartItems[i].name;
  cartItem.appendChild(itemTitle);
};

// Appends Price to Item
const addPrice = (cartItem, cartItems, i) => {
  let itemPrice = document.createElement("h3");
  itemPrice.innerHTML = cartItems[i].price + " kr";
  cartItem.appendChild(itemPrice);
};

// Appends Button to Item
const addButton = (cartItem, cartItems, i) => {
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.id = "remove-button-" + i;
  removeButton.addEventListener("click", () => {
    removeCartItem(cartItems[i].id); //Gives the button an eventlistener to remove on click
  });
  cartItem.appendChild(removeButton);
};

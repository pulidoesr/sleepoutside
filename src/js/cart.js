import { getLocalStorage } from './utils.mjs';
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  // const modifiedcartItems = Object.keys(cartItems).map((key) => `${key}: ${cartItems[key]}`);
  // const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  // Check if cartItems is an array; if not, handle the error
  // Convert object to an array of key-value pairs
  const modifiedcartItems = Object.entries(cartItems);
  if (!Array.isArray(cartItems)) {
    console.error('Cart items are not an array:', cartItems);
    console.log(typeof cartItems);
    console.log(modifiedcartItems);
    // return; // Exit if cartItems is not an array
  }

  // const htmlItems = modifiedcartItems.map((item) => cartItemTemplate(item));
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();

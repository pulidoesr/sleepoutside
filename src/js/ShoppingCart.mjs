import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
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

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    let totalCart = 0;
    const cartItems = getLocalStorage(this.key);
    
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    const cartElement = document.querySelector('#totalcart');
    cartItems.map((item) => totalCart += item.FinalPrice);
    console.log(totalCart);
    const totalHtml = `<p class="cart-card__total_cart">Total Cart $${totalCart.toFixed(2)}</p>`;
    document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    cartElement.insertAdjacentHTML('beforeend', totalHtml);
  }
}
import { getLocalStorage } from "./utils.mjs";

export default class cartSummary {
  constructor(key) {
    this.key = key;
  }
  calculateSummary() {
    // Initialize order summary values
    let subtotal = 0;  // Example subtotal value
    let shipping = 0;    // Example shipping value
    let tax = 0;  // Example tax calculation (6%)
    let orderTotal = 0;
    const cartItems = getLocalStorage(this.key);
    cartItems.map((item) => subtotal += item.FinalPrice);
    shipping = 10 + (cartItems.length - 1)* 2;
    tax = (subtotal + shipping) * 0.06;
    orderTotal = subtotal + shipping + tax; 
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('orderTotal').textContent = `$${orderTotal.toFixed(2)}`;
  
  }
}


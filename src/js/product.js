import { setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
import getParams from './utils.mjs';

const dataSource = new ProductData('tents');
const productId = getParam('product')

console.log(datasource.findProductById(productId));

function addProductToCart(product) {
  setLocalStorage('so-cart', product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  // Check if the target has a data-id attribute

  const product = await dataSource.findProductById(e.target.dataset.id);
  const productId = e.target.dataset.id;
  if (!productId) {
    console.error('Product ID not found on the clicked element.');
    return; // Exit if no product ID is present
  }
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

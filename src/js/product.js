import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { setLocalStorage, getParams } from './utils.mjs';

const productId = getParams('product');
const dataSource = new ProductData('tents');
const product = new ProductDetails(productId, dataSource);
product.init();

// console.log(datasource.findProductById(product));

/* function addProductToCart(product) {
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
  .addEventListener('click', addToCartHandler); */

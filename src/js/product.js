
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

// load Header and Footer
loadHeaderFooter();

const productId = getParams('product');
const dataSource = new ProductData();
const product = new ProductDetails(productId, dataSource);
product.init();

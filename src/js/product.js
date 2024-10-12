
import ExternalServices from './ExternalServices.mjs';
import ProductDetails from './ProductDetails.mjs';
import { loadHeaderFooter, getParams } from './utils.mjs';

// load Header and Footer
loadHeaderFooter();

const dataSource = new ExternalServices('tents');
const productId = getParams('product');

const product = new ProductDetails(productId, dataSource);
product.init();
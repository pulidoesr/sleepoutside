// class ProductData that fetches the product data
import { loadHeaderFooter, getParams } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductList from './ProductList.mjs';



// load Header and Footer
loadHeaderFooter();

// Define the category you want to display, for example 'tents'
const category = getParams('category')

// Create an instance of ProductData that will provide the product data
const dataSource = new ProductData();

// then get the element we want the product list to render in
const element = document.querySelector('.product-list');

// then create an instance of our ProductList class and send it the correct information.
const listing = new ProductList(category, dataSource, element);

// Initialize the listing (this will fetch the data and render the list)
listing.init();

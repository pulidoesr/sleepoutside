// class ExternalServices that fetches the product data
import { loadHeaderFooter, getParams } from './utils.mjs';
import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';



// load Header and Footer
loadHeaderFooter();

// Define the category you want to display, for example 'tents'
const category = getParams('category')

// Create an instance of ExternalServices that will provide the product data
const dataSource = new ExternalServices();

// then get the element we want the product list to render in
const element = document.querySelector('.product-list');

// then create an instance of our ProductList class and send it the correct information.
const listing = new ProductList(category, dataSource, element);

// Initialize the listing (this will fetch the data and render the list)
listing.init();

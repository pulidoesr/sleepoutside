// class ProductData that fetches the product data
import ProductListing from './ProductList.mjs';
import ProductData from './ProductData.mjs';

// Define the category you want to display, for example 'tents'
const category = 'tents';

// Create an instance of ProductData that will provide the product data
const dataSource = new ProductData('tents');

// Select the HTML element where the product list will be displayed
const Element = document.querySelector('.product-list');

// Now create an instance of ProductListing
const Listing = new ProductListing(category, dataSource, Element);

// Initialize the listing (this will fetch the data and render the list)
Listing.init();

import { loadHeaderFooter } from './utils.mjs';
import checkoutProcess from './checkoutprocess.mjs';

loadHeaderFooter();
const myCheckout = new checkoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

  // Get all input fields and the submit button
  const form = document.getElementById('checkoutForm');
  const inputs = form.querySelectorAll('input');
  const submitBtn = document.getElementById('submitBtn');

  // Function to check if all fields are filled
  function checkForm() {
    let allFilled = true;
    
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    // Enable or disable the submit button based on whether all fields are filled
    submitBtn.disabled = !allFilled;
  }
   // Add event listeners to each input field to check the form whenever any input changes
   inputs.forEach(input => {
    input.addEventListener('input', checkForm);
  });

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    alert('Form submitted successfully!');
    // You can now send the form data to the server or handle it as needed
    myCheckout.checkout();
  });

  
// Update the HTML to show the order summary
  
const myCheckOutProcess = new checkoutProcess("so-cart", ".checkout-summary");
myCheckOutProcess.init();
myCheckOutProcess.calculateSummary(); // Make sure this is executed
    
    

  

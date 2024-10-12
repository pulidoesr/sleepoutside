import { loadHeaderFooter } from './utils.mjs';
import cartSummary from './checkoutprocess.mjs';

loadHeaderFooter();

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
  });

    
  
    // Update the HTML to show the order summary
  
    const summary = new cartSummary('so-cart');
    summary.calculateSummary(); // Make sure this is executed
    
    

  

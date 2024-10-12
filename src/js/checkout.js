import { loadHeaderFooter } from './utils.mjs';


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

    // Initialize order summary values
    let subtotal = 100;  // Example subtotal value
    let shipping = 5;    // Example shipping value
    let tax = subtotal * 0.08;  // Example tax calculation (8%)
    let orderTotal = subtotal + shipping + tax;
  
    // Update the HTML to show the order summary
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('orderTotal').textContent = `$${orderTotal.toFixed(2)}`;
  

  

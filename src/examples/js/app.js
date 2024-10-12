// Fetch the data from your JSON file
fetch('./examples/json/Voice_Menu_CustomerService_Draft.json')
  .then((response) => response.json()) // Parse the JSON data
  .then((data) => {
    // Create the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar', // Specify the type of chart (bar, line, pie, etc.)
      data: {
        labels: data.labels, // Use the labels from JSON
        datasets: data.datasets, // Use the datasets from JSON
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch((error) => console.error('Error fetching JSON:', error));

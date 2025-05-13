async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzE0ijdSqXslHL9SEfpennRELwVnncVGCxxDXYqDs1hFoF2F_gRUF7dn0qWPIBhylA/exec', {
      method: 'POST',
      body: JSON.stringify(data), // Send the actual data passed to the function
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json(); // Parse the response as JSON
    console.log(result);

    if (result.success) {
      alert('Shipment saved successfully!');
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while saving shipment.');
  }
}

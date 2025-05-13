async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_URL/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
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

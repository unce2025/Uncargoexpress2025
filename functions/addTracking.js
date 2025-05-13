async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzb7XBZBOgHMraxXI3W8MG95hq7OU8087ns08eyrg0mcpuhGPIt-0lap5AMZXMU_Fs/exec', {
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

const GAS_URL = 'https://script.google.com/macros/s/AKfycbw6IGmF5eKh06tFNi49DJHLdDm0xLlDNUYV0rYjWhFRhwjrTSLng-Ju6acP5eS0eqQ8/exec'; // Example

async function addTracking(data) {
  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shipment: data })  // ✅ wrap correctly
    });

    const resultText = await response.text();
    const result = JSON.parse(resultText);

    if (result.success) {
      alert("Shipment saved successfully.");
    } else {
      alert("Error: " + result.message);
      console.error("Server response:", result);
    }
  } catch (error) {
    console.error("Error submitting tracking data:", error);
    alert("An error occurred while saving the shipment.");
  }
}

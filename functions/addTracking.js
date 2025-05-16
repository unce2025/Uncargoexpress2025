const GAS_URL = 'https://script.google.com/macros/s/AKfycbzerHjcOxHyjbxFEJ2jRdklOk06f_oc9t4YUOLyBzIqhnlp98go0vbONcsLZYrHUMSd/exec'; // Example

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

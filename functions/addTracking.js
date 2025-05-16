const GAS_URL = 'https://script.google.com/macros/s/AKfycbyWydoEZj5yKA6dFiIPvrnHv0iU0U0QDDagt86WlMh4-Rpaac0OeSCheUiyxYfd0XD8/exec'; // Example

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

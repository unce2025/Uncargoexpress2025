async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxDKwV5eMh7kZUs6WkQ2HRfAqgv2YwZ8eo3lSka76CFJlQdfSkxQh2R99o2E-SasiI/execc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Response from server:", result);

    if (result.success) {
      alert("Shipment saved successfully!");
    } else {
      alert("Failed to save shipment: " + (result.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Error submitting tracking data:", error);
    alert("An error occurred while saving the shipment.");
  }
}

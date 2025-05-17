const GAS_URL = 'https://script.google.com/macros/s/AKfycbzBBwy4tcn7cblpdfh9eYI8QkwdqMgM8zS309EvnWgA_1TowuNrabOWWMn7PKtckwvv/exec';

async function addTracking(data) {
  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipment: data }),
    });

    const result = await response.json();

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

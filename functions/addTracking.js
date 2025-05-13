async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz2IUSg1XEhVcb6aQYPcFyUBynOkt9G70Lk6b9ZHzv_wa1C3MJ9u3gVNn03rXSJ0YE/exec', {
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

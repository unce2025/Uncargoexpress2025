async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbxaJNPDvBfowAq9OUojrSm4zi2l1HcUUbYKkJprfeOZUfvIDRjYuiCKK4j2ShANdOxK/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result && result.TrackingNumber) {
      // Assuming the response is the shipment object itself
      displayShipment(result);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("Error fetching tracking info. Please check your internet connection or try again later.");
  }
}

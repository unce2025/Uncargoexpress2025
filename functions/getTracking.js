async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycby5YJ2Y_ckInT02F9IdLj7U6SI4uG2pNfHoJD-gMtV0LgazblqzK5gWfL5mKeLwhLaM/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success && result.shipment) {
      const shipment = result.shipment;

      // No need to parse log/history — already arrays
      displayShipment(shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("Error fetching tracking info. Please check your internet connection or try again later.");
  }
}

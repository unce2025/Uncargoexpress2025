async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbzp4Tx9w2hw5LE8tOXx6Wf8kNHTzTxR-2lEfc4bnYj7uaTFZOjuw_8cdWRcBBT0rFzd/exec?tracking=${encodeURIComponent(trackingNumber)}`;

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

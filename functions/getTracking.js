async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbxe_TxpSD_klqT_k5h1cuz8kTpHtbg7JLl8Y-3ToMlU2K6p3vrcoMD7Y31IVoRHojGW/exec?tracking=${trackingNumber}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    if (result.success && result.shipment) {
      displayShipment(result.shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("Error fetching tracking info.");
  }
}

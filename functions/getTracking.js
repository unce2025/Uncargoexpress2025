async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbxImebyz8gE_DiqWN-K2XnlPS7vFH3xT2TYkhlPWn6HDAIbbPuPLzLJuz-n3nDJtsmJ/exec?tracking=${trackingNumber}`;

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

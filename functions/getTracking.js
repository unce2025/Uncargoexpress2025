async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbzrtpPr6-NoxotSQ-upinCohoElIJxQQO259cpYlUOjhSFLcIcng5m_MnDeh6r9tyR5/exec?tracking=${trackingNumber}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (result.success && result.shipment) {
      displayShipment(result.shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

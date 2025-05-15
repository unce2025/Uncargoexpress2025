async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbwD_8ZzBGDSYPnKRSUz00TIucVWThJM3Ek8llQm91WRdEfRcA-s217ho8XmpusIGFSA/exec?tracking=${trackingNumber}`;
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

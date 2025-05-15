async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbw1_foX2lNvSNEJvgBU1r6jiLCvC7wYfG_JDyRaOoP6mVjXES6Yj2nYfrp1vqknq_jJ/exec?tracking=${trackingNumber}`;
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

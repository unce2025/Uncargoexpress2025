async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbzSfjjysne-gXJ-6re4NIgTFelItLFycAKiGfL9JGuGHIDMc4BpnIHGKrGT14opFDdH/exec?tracking=${encodeURIComponent(trackingNumber)}`;

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

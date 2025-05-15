async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbw6zmg9CZKyjxdONJB_uCsD3pLsJ46VXfYnLH5-Z6vgdQ7vcmeqAM4TcMsu03Oghlo/exec?tracking=${trackingNumber}`;

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

async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbz6sDjz5ra5F0MKrHVfgycdvOQ-kCdmFKhlExuPiz69LnS0Q9PXQQKEmJ1yttS49_y5/exec?tracking=${trackingNumber}`;

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

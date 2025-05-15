async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbzntqJs5GXLJmCP3ydJ8cUb51YEHgUsO963TB9WV9arEo1uGkHsTvK43T4QdrBKJsll/exec?tracking=${trackingNumber}`;

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

async function getTracking(trackingNumber) {
  const proxyUrl = "/.netlify/functions/proxy"; // Or your actual proxy endpoint path
  const params = new URLSearchParams({ trackingNumber });

  try {
    const response = await fetch(`${proxyUrl}?${params.toString()}`);
    const result = await response.json();

    if (result && result.shipment) {
      displayShipment(result.shipment);
    } else {
      alert("Shipment not found.");
    }
  } catch (error) {
    console.error("Error fetching shipment:", error);
    alert("Failed to load shipment data.");
  }
}

function loadShipment(event) {
  event.preventDefault();
  const trackingNumber = document.getElementById("searchTrackingNumber").value.trim();
  if (trackingNumber) {
    getTracking(trackingNumber);
  }
}

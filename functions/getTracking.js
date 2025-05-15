async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `https://your-netlify-site.netlify.app/.netlify/functions/proxy?tracking=${encodeURIComponent(trackingNumber.trim())}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.success) {
      displayShipment(result.shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("An error occurred while retrieving tracking information.");
  }
}

function displayShipment(shipment) {
  if (!shipment) {
    alert("No shipment data available.");
    return;
  }

  const shipmentInfoContainer = document.getElementById('shipmentInfoContainer');
  shipmentInfoContainer.innerHTML = '';

  shipmentInfoContainer.innerHTML = `
    <h3>Shipment Information</h3>
    <p><strong>Tracking Number:</strong> ${shipment.trackingNumber}</p>
    <p><strong>Status:</strong> ${shipment.status}</p>
    <p><strong>Shipper Name:</strong> ${shipment.shipperName}</p>
    <p><strong>Receiver Name:</strong> ${shipment.receiverName}</p>
    <p><strong>Estimated Delivery Date:</strong> ${shipment.estimatedDeliveryDate}</p>
    <p><strong>Shipped Date:</strong> ${shipment.shippedDate}</p>
    <p><strong>Payment:</strong> ${shipment.payment}</p>
  `;
}

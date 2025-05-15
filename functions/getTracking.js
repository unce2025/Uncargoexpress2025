async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `/.netlify/functions/proxy?tracking=${encodeURIComponent(trackingNumber.trim())}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

    if (result.success && result.shipment) {
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
  shipmentInfoContainer.innerHTML = `
    <h3>Shipment Information</h3>
    <p><strong>Timestamp:</strong> ${shipment.Timestamp || ''}</p>
    <p><strong>Tracking Number:</strong> ${shipment.trackingNumber || ''}</p>
    <p><strong>Status:</strong> ${shipment.status || ''}</p>
    <p><strong>Shipper Name:</strong> ${shipment.shipperName || ''}</p>
    <p><strong>Shipper Phone:</strong> ${shipment.shipperPhone || ''}</p>
    <p><strong>Shipper Address:</strong> ${shipment.shipperAddress || ''}</p>
    <p><strong>Shipper Email:</strong> ${shipment.shipperEmail || ''}</p>
    <p><strong>Receiver Name:</strong> ${shipment.receiverName || ''}</p>
    <p><strong>Receiver Phone:</strong> ${shipment.receiverPhone || ''}</p>
    <p><strong>Receiver Address:</strong> ${shipment.receiverAddress || ''}</p>
    <p><strong>Receiver Email:</strong> ${shipment.receiverEmail || ''}</p>
    <p><strong>Estimated Delivery Date:</strong> ${shipment.estimatedDeliveryDate || ''}</p>
    <p><strong>Shipped Date:</strong> ${shipment.shippedDate || ''}</p>
    <p><strong>Pick Up Time:</strong> ${shipment.pickUpTime || ''}</p>
    <p><strong>Departure:</strong> ${shipment.departure || ''}</p>
    <p><strong>Mode:</strong> ${shipment.mode || ''}</p>
    <p><strong>Product:</strong> ${shipment.product || ''}</p>
    <p><strong>Quantity:</strong> ${shipment.quantity || ''}</p>
    <p><strong>Payment:</strong> ${shipment.payment || ''}</p>
    <p><strong>Total Freight:</strong> ${shipment.totalFreight || ''}</p>
    <h4>Log:</h4>
    <pre>${JSON.stringify(shipment.log || [], null, 2)}</pre>
    <h4>History:</h4>
    <pre>${JSON.stringify(shipment.history || [], null, 2)}</pre>
  `;
}

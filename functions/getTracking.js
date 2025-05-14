async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `https://script.google.com/macros/s/AKfycbxUBHH8fI4yKPzlIVbNucpg-cBkTHfU2Px0GsmMnvHkb_3kJL6lm8IsVNKROAWPn0A/exec?tracking=${encodeURIComponent(trackingNumber.trim())}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.success) {
      displayShipment(result.shipment); // This is where the shipment is displayed
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("An error occurred while retrieving tracking information.");
  }
}

// Function to display shipment data (you need to implement this)
function displayShipment(shipment) {
  if (!shipment) {
    alert("No shipment data available.");
    return;
  }

  // Assuming you have a container to display shipment info
  const shipmentInfoContainer = document.getElementById('shipmentInfoContainer');

  // Clear existing data
  shipmentInfoContainer.innerHTML = '';

  // Example of displaying shipment data
  shipmentInfoContainer.innerHTML = `
    <h3>Shipment Information</h3>
    <p><strong>Tracking Number:</strong> ${shipment.trackingNumber}</p>
    <p><strong>Status:</strong> ${shipment.status}</p>
    <p><strong>Shipper Name:</strong> ${shipment.shipperName}</p>
    <p><strong>Receiver Name:</strong> ${shipment.receiverName}</p>
    <p><strong>Estimated Delivery Date:</strong> ${shipment.estimatedDeliveryDate}</p>
    <p><strong>Shipped Date:</strong> ${shipment.shippedDate}</p>
    <p><strong>Payment:</strong> ${shipment.payment}</p>
    <!-- Add other details as needed -->
  `;
}

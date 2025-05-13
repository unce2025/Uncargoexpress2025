async function getTracking(trackingNumber) {
  try {
    const response = await fetch(`https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_URL/exec?tracking=${trackingNumber}`);
    const result = await response.json();

    if (result.success) {
      console.log(result.shipment);
      displayShipment(result.shipment);
    } else {
      alert('Tracking number not found.');
    }
  } catch (error) {
    console.error(error);
    alert('Error retrieving tracking info.');
  }
}

// Sample function — customize this for your page
function displayShipment(shipment) {
  document.getElementById('status').textContent = shipment.Status;
  document.getElementById('shipperName').textContent = shipment.ShipperName;
  document.getElementById('receiverName').textContent = shipment.ReceiverName;
  // Add other fields as needed
}

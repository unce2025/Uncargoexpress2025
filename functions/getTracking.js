async function getTracking(trackingNumber) {
  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbzE0ijdSqXslHL9SEfpennRELwVnncVGCxxDXYqDs1hFoF2F_gRUF7dn0qWPIBhylA/exec?tracking=${trackingNumber}`);
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
  document.getElementById('status').textContent = shipment.status;
  document.getElementById('shipperName').textContent = shipment.shipperName;
  document.getElementById('receiverName').textContent = shipment.receiverName;
  document.getElementById('estimatedDeliveryDate').textContent = shipment.estimatedDeliveryDate;
  document.getElementById('shippedDate').textContent = shipment.shippedDate;
  document.getElementById('pickUpTime').textContent = shipment.pickUpTime;
  // Add other fields as needed
}

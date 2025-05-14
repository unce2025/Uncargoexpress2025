async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbygtvLShQWiCzAU0L1Jh9vgxcwBcZWuzE1f8gMSPOS6gzPNJ9DIFszL2CvseZ_Ekdg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Response from server:", result);

    if (result.success) {
      alert("Shipment saved successfully!");
    } else {
      alert("Failed to save shipment: " + (result.message || "Unknown error"));
    }
  } catch (error) {
    console.error("Error submitting tracking data:", error);
    alert("An error occurred while saving the shipment.");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitBtn').addEventListener('click', () => {
    const formData = {
      trackingNumber: document.getElementById('TrackingNumber').value,
      shipperName: document.getElementById('ShipperName').value,
      shipperPhone: document.getElementById('ShipperPhone').value,
      shipperAddress: document.getElementById('ShipperAddress').value,
      shipperEmail: document.getElementById('ShipperEmail').value,
      receiverName: document.getElementById('ReceiverName').value,
      receiverPhone: document.getElementById('ReceiverPhone').value,
      receiverAddress: document.getElementById('ReceiverAddress').value,
      receiverEmail: document.getElementById('ReceiverEmail').value,
      estimatedDeliveryDate: document.getElementById('EstimatedDeliveryDate').value,
      shippedDate: document.getElementById('ShippedDate').value,
      pickUpTime: document.getElementById('PickUpTime').value,
      departure: document.getElementById('Departure').value,
      mode: document.getElementById('Mode').value,
      product: document.getElementById('Product').value,
      quantity: document.getElementById('Quantity').value,
      payment: document.getElementById('Payment').value,
      totalFreight: document.getElementById('TotalFreight').value,
      log: JSON.parse(document.getElementById('log').value || '[]'),
      history: JSON.parse(document.getElementById('history').value || '[]'),
      packages: JSON.parse(document.getElementById('packages').value || '[]'),
      status: document.getElementById('Status').value
    };

    addTracking(formData);
  });
});

async function addTracking(data) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxMobcUmU4Qb4zESHpFuTp6yozEE5YBl2Vg_V0ZhcZtOGyhOkbt_dB3xXS-Vo15tQ/exec', {
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
  console.error("Error submitting tracking data:", error);  // This logs the real error
  alert("An error occurred while saving the shipment:\n" + error.message);  // This shows you the error in the alert
}

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitBtn').addEventListener('click', () => {
    let logData = [];
    let historyData = [];

    // Safely parse log
    try {
      const rawLog = document.getElementById('log').value;
      logData = rawLog ? JSON.parse(rawLog) : [];
    } catch (e) {
      alert("Log field contains invalid JSON format. Please fix it.");
      console.error("Invalid log JSON:", document.getElementById('log').value);
      return;
    }

    // Safely parse history
    try {
      const rawHistory = document.getElementById('history').value;
      historyData = rawHistory ? JSON.parse(rawHistory) : [];
    } catch (e) {
      alert("History field contains invalid JSON format. Please fix it.");
      console.error("Invalid history JSON:", document.getElementById('history').value);
      return;
    }

    const formData = {
      trackingNumber: document.getElementById('TrackingNumber').value,
      status: document.getElementById('Status').value,
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
      log: logData,
      history: historyData
    };

    addTracking(formData);
  });
});

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

    // Required fields validation
    const requiredFields = [
      'TrackingNumber', 'Status', 'ShipperName', 'ReceiverName', 
      'EstimatedDeliveryDate', 'ShippedDate', 'PickUpTime', 'Departure', 
      'Mode', 'Product', 'Quantity', 'Payment', 'TotalFreight'
    ];

    // Check if any required field is empty
    for (let field of requiredFields) {
      if (!document.getElementById(field).value.trim()) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    // Gather the form data
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

    // Submit the form data
    addTracking(formData);
  });
});

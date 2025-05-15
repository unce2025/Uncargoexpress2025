document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submitBtn').addEventListener('click', () => {
    let logData = [];
    let historyData = [];

    try {
      const rawLog = document.getElementById('log').value;
      logData = rawLog ? JSON.parse(rawLog) : [];
    } catch (e) {
      alert("Log field contains invalid JSON format. Please fix it.");
      console.error("Invalid log JSON:", document.getElementById('log').value);
      return;
    }

    try {
      const rawHistory = document.getElementById('history').value;
      historyData = rawHistory ? JSON.parse(rawHistory) : [];
    } catch (e) {
      alert("History field contains invalid JSON format. Please fix it.");
      console.error("Invalid history JSON:", document.getElementById('history').value);
      return;
    }

    const requiredFields = [
      'TrackingNumber', 'Status', 'ShipperName', 'ReceiverName',
      'EstimatedDeliveryDate', 'ShippedDate', 'PickUpTime', 'Departure',
      'Mode', 'Product', 'Quantity', 'Payment', 'TotalFreight'
    ];

    for (let field of requiredFields) {
      const value = document.getElementById(field).value.trim();
      if (!value) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    const formData = {
      trackingNumber: document.getElementById('TrackingNumber').value.trim(),
      status: document.getElementById('Status').value.trim(),
      shipperName: document.getElementById('ShipperName').value.trim(),
      shipperPhone: document.getElementById('ShipperPhone').value.trim(),
      shipperAddress: document.getElementById('ShipperAddress').value.trim(),
      shipperEmail: document.getElementById('ShipperEmail').value.trim(),
      receiverName: document.getElementById('ReceiverName').value.trim(),
      receiverPhone: document.getElementById('ReceiverPhone').value.trim(),
      receiverAddress: document.getElementById('ReceiverAddress').value.trim(),
      receiverEmail: document.getElementById('ReceiverEmail').value.trim(),
      estimatedDeliveryDate: document.getElementById('EstimatedDeliveryDate').value.trim(),
      shippedDate: document.getElementById('ShippedDate').value.trim(),
      pickUpTime: document.getElementById('PickUpTime').value.trim(),
      departure: document.getElementById('Departure').value.trim(),
      mode: document.getElementById('Mode').value.trim(),
      product: document.getElementById('Product').value.trim(),
      quantity: document.getElementById('Quantity').value.trim(),
      payment: document.getElementById('Payment').value.trim(),
      totalFreight: document.getElementById('TotalFreight').value.trim(),
      log: logData,
      history: historyData
    };

    addTracking(formData);
  });
});

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
      TrackingNumber: document.getElementById('TrackingNumber').value.trim(),
      Status: document.getElementById('Status').value.trim(),
      ShipperName: document.getElementById('ShipperName').value.trim(),
      ShipperPhone: document.getElementById('ShipperPhone').value.trim(),
      ShipperAddress: document.getElementById('ShipperAddress').value.trim(),
      ShipperEmail: document.getElementById('ShipperEmail').value.trim(),
      ReceiverName: document.getElementById('ReceiverName').value.trim(),
      ReceiverPhone: document.getElementById('ReceiverPhone').value.trim(),
      ReceiverAddress: document.getElementById('ReceiverAddress').value.trim(),
      ReceiverEmail: document.getElementById('ReceiverEmail').value.trim(),
      EstimatedDeliveryDate: document.getElementById('EstimatedDeliveryDate').value.trim(),
      ShippedDate: document.getElementById('ShippedDate').value.trim(),
      PickUpTime: document.getElementById('PickUpTime').value.trim(),
      Departure: document.getElementById('Departure').value.trim(),
      Mode: document.getElementById('Mode').value.trim(),
      Product: document.getElementById('Product').value.trim(),
      Quantity: document.getElementById('Quantity').value.trim(),
      Payment: document.getElementById('Payment').value.trim(),
      TotalFreight: document.getElementById('TotalFreight').value.trim(),
      log: logData,
      history: historyData
    };

    addTracking(formData);
  });
});

const GAS_URL = 'https://script.google.com/macros/s/AKfycbysJChO3-Xys8Dn7d9SNqthUMpAA80LZLInUpq8JKVbJU1AsMuQh4d1xTQHvmxwfHM1/exec';

async function addTracking(data) {
  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resultText = await response.text();
    const result = JSON.parse(resultText);

    if (result.success) {
      alert("Shipment saved successfully.");
    } else {
      alert("Error: " + result.message);
      console.error("Server response:", result);
    }
  } catch (error) {
    console.error("Error submitting tracking data:", error);
    alert("An error occurred while saving the shipment.");
  }
}

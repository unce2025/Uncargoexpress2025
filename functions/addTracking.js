// functions/addTracking.js
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxaJNPDvBfowAq9OUojrSm4zi2l1HcUUbYKkJprfeOZUfvIDRjYuiCKK4j2ShANdOxK/exec';

async function submitForm(event) {
  event.preventDefault();
  const fields = [
    "TrackingNumber","Status","ShipperName","ShipperPhone","ShipperAddress","ShipperEmail",
    "ReceiverName","ReceiverPhone","ReceiverAddress","ReceiverEmail",
    "EstimatedDeliveryDate","ShippedDate","FlightNumber","PackageWeight",
    "Mode","Product","Quantity","Payment","TotalFreight","log","history"
  ];

  const data = {};
  for (let field of fields) {
    const el = document.getElementById(field);
    data[field] = el ? el.value : "";
  }

  try {
    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shipment: data })
    });
    const result = await response.json();
    alert(result.success ? "Shipment saved successfully!" : "Error: " + result.message);
  } catch (err) {
    console.error("Save error", err);
    alert("Failed to save shipment.");
  }
}

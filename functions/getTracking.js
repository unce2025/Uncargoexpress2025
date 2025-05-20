
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxaJNPDvBfowAq9OUojrSm4zi2l1HcUUbYKkJprfeOZUfvIDRjYuiCKK4j2ShANdOxK/exec';

async function loadShipment(event) {
  event.preventDefault();
  const trackingNumber = document.getElementById("searchTrackingNumber").value.trim();
  if (!trackingNumber) return alert("Enter a tracking number.");

  try {
    const response = await fetch(`${GAS_URL}?trackingNumber=${encodeURIComponent(trackingNumber)}`);
    const result = await response.json();
    if (!result.shipment) return alert("Shipment not found.");
    populateForm(result.shipment);
  } catch (err) {
    console.error("Load error", err);
    alert("Failed to load shipment.");
  }
}

function populateForm(data) {
  const keys = Object.keys(data);
  for (let key of keys) {
    const el = document.getElementById(key);
    if (el) el.value = data[key];
  }
}

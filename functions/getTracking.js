async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `https://script.google.com/macros/s/AKfycbz2IUSg1XEhVcb6aQYPcFyUBynOkt9G70Lk6b9ZHzv_wa1C3MJ9u3gVNn03rXSJ0YE/exec?tracking=UN123CE456{encodeURIComponent(trackingNumber.trim())}`;
    const response = await fetch(url);
    const result = await response.json();

    if (result.success) {
      displayShipment(result.shipment); // You must define this function in your page
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("An error occurred while retrieving tracking information.");
  }
}

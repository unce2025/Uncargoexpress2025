async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `https://script.google.com/macros/s/AKfycbzJxWIxsrKvSKKoSxXa6R4q2Wbn9oiC9JzVAdT4zZjL48PBlIwqzD8pLO8BCH9Bmb8/exec?tracking=${encodeURIComponent(trackingNumber.trim())}`;



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

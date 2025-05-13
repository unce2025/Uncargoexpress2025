async function getTracking(trackingNumber) {
  if (!trackingNumber || trackingNumber.trim() === "") {
    alert("Please enter a valid tracking number.");
    return;
  }

  try {
    const url = `https://script.google.com/macros/s/AKfycbydL4HSiIZ-xaC5x3iPiMzvslPS7LGOfSMMrmO8EXfBSTW_ZkM-aRl0lPjQT1C84r4/exec?tracking=${encodeURIComponent(trackingNumber.trim())}`;
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

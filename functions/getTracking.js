async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbxjKoofO7d6UppF6YUWD8NDG6suTrCycEy1rHj9bXqBdOaFKgJcSG9X4jfYc0Syjpcc/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success && result.shipment) {
      const shipment = result.shipment;

      // No need to parse log/history — already arrays
      displayShipment(shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("Error fetching tracking info. Please check your internet connection or try again later.");
  }
}

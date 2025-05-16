async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbwqQ0i-5Uk22vLPwi_b5dsdwqcR5_mxhn6YB-VPLQH_FZFYkFtd5UdjoquqXKkeO8qC/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success && result.shipment) {
      const shipment = result.shipment;

      // Parse log and history safely
      try {
        shipment.log = JSON.parse(shipment.log || "[]");
      } catch (e) {
        console.warn("Invalid JSON in log field:", e);
        shipment.log = [];
      }

      try {
        shipment.history = JSON.parse(shipment.history || "[]");
      } catch (e) {
        console.warn("Invalid JSON in history field:", e);
        shipment.history = [];
      }

      displayShipment(shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error fetching tracking info:", error);
    alert("Error fetching tracking info. Please check your internet connection or try again later.");
  }
}

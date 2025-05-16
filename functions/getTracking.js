async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbyWydoEZj5yKA6dFiIPvrnHv0iU0U0QDDagt86WlMh4-Rpaac0OeSCheUiyxYfd0XD8/exec?tracking=${encodeURIComponent(trackingNumber)}`;

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

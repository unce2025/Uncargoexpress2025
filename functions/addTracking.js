document.getElementById("shipmentForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const shipment = {
    TrackingNumber: document.getElementById("TrackingNumber").value.trim(),
    Status: document.getElementById("Status").value.trim(),
    ShipperName: document.getElementById("ShipperName").value.trim(),
    ShipperPhone: document.getElementById("ShipperPhone").value.trim(),
    ShipperAddress: document.getElementById("ShipperAddress").value.trim(),
    ShipperEmail: document.getElementById("ShipperEmail").value.trim(),
    ReceiverName: document.getElementById("ReceiverName").value.trim(),
    ReceiverPhone: document.getElementById("ReceiverPhone").value.trim(),
    ReceiverAddress: document.getElementById("ReceiverAddress").value.trim(),
    ReceiverEmail: document.getElementById("ReceiverEmail").value.trim(),
    EstimatedDeliveryDate: document.getElementById("EstimatedDeliveryDate").value,
    ShippedDate: document.getElementById("ShippedDate").value,
    FlightNumber: document.getElementById("FlightNumber").value.trim(),
    PackageWeight: document.getElementById("PackageWeight").value.trim(),
    Mode: document.getElementById("Mode").value.trim(),
    Product: document.getElementById("Product").value.trim(),
    Quantity: parseInt(document.getElementById("Quantity").value) || 0,
    Payment: document.getElementById("Payment").value.trim(),
    TotalFreight: document.getElementById("TotalFreight").value.trim(),
    log: document.getElementById("log").value.trim(),
    history: document.getElementById("history").value.trim()
  };

  try {
    const response = await fetch("/.netlify/functions/proxy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shipment })
    });

    const result = await response.json();

    if (result.success) {
      alert("Shipment saved successfully!");
    } else {
      alert("Failed to save shipment.");
    }
  } catch (error) {
    console.error("Error saving shipment:", error);
    alert("Error saving shipment.");
  }
});

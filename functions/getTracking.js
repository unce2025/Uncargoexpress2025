async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?TrackingNumber=${trackingNumber}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (result.success && result.shipment) {
      displayShipment(result.shipment);
    } else {
      alert("Tracking number not found.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayShipment(shipment) {
  document.getElementById("status").textContent = shipment.Status;
  document.getElementById("shipperName").textContent = shipment.ShipperName;
  document.getElementById("receiverName").textContent = shipment.ReceiverName;
  // ...set other fields...

  // Display log
  try {
    const log = JSON.parse(shipment.log);
    const logContainer = document.getElementById("logTimeline");
    logContainer.innerHTML = "";
    log.forEach(entry => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${entry.date}</strong>: ${entry.description}`;
      logContainer.appendChild(div);
    });
  } catch (e) {
    console.error("Invalid log JSON", e);
  }

  // Display history
  try {
    const history = JSON.parse(shipment.history);
    const historyContainer = document.getElementById("historyTable");
    historyContainer.innerHTML = "";
    history.forEach(entry => {
      const row = `<tr><td>${entry.date}</td><td>${entry.location}</td><td>${entry.status}</td></tr>`;
      historyContainer.innerHTML += row;
    });
  } catch (e) {
    console.error("Invalid history JSON", e);
  }
}

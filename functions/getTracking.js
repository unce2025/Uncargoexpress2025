function displayShipment(shipment) {
  if (!shipment) {
    alert("No shipment data available.");
    return;
  }

  const shipmentInfoContainer = document.getElementById('shipmentInfoContainer');
  shipmentInfoContainer.innerHTML = '';

  shipmentInfoContainer.innerHTML = `
    <h3>Shipment Information</h3>
    <p><strong>Timestamp:</strong> ${shipment.Timestamp}</p>
    <p><strong>Tracking Number:</strong> ${shipment.TrackingNumber}</p>
    <p><strong>Status:</strong> ${shipment.Status}</p>
    <p><strong>Shipper Name:</strong> ${shipment.ShipperName}</p>
    <p><strong>Shipper Phone:</strong> ${shipment.ShipperPhone}</p>
    <p><strong>Shipper Address:</strong> ${shipment.ShipperAddress}</p>
    <p><strong>Shipper Email:</strong> ${shipment.ShipperEmail}</p>
    <p><strong>Receiver Name:</strong> ${shipment.ReceiverName}</p>
    <p><strong>Receiver Phone:</strong> ${shipment.ReceiverPhone}</p>
    <p><strong>Receiver Address:</strong> ${shipment.ReceiverAddress}</p>
    <p><strong>Receiver Email:</strong> ${shipment.ReceiverEmail}</p>
    <p><strong>Estimated Delivery Date:</strong> ${shipment.EstimatedDeliveryDate}</p>
    <p><strong>Shipped Date:</strong> ${shipment.ShippedDate}</p>
    <p><strong>Pick-Up Time:</strong> ${shipment.PickUpTime}</p>
    <p><strong>Departure:</strong> ${shipment.Departure}</p>
    <p><strong>Mode:</strong> ${shipment.Mode}</p>
    <p><strong>Product:</strong> ${shipment.Product}</p>
    <p><strong>Quantity:</strong> ${shipment.Quantity}</p>
    <p><strong>Payment:</strong> ${shipment.Payment}</p>
    <p><strong>Total Freight:</strong> ${shipment.TotalFreight}</p>
    <p><strong>Log:</strong> ${shipment.log}</p>
    <p><strong>History:</strong> ${shipment.history}</p>
  `;
}

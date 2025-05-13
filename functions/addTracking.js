async function addTracking(data) {
  try {
    const response = await fetch('{"success":true,"shipment":{"trackingNumber":"UN123CE456","status":"On hold","mode":"Air-Freight","product":"Electronics","quantity":2,"payment":"PayPal","totalFreight":320,"estimatedDeliveryDate":"2025-05-22T16:00:00.000Z","shippedDate":"2025-05-06T16:00:00.000Z","pickUpTime":"1899-12-30T01:23:18.000Z","shipperName":"Don Charles","shipperAddress":"United Kingdom","shipperPhone":9934604219,"shipperEmail":"dondoncharles@gmail.com","receiverName":"ELIZABETH D. AQUINO","receiverAddress":"PUROK 8 SALVACION, PANABO CITY, DAVAO DEL NORTE 8114","receiverPhone":993460219,"receiverEmail":"elizabethaquino0408199@gmail.com","log":[{"status":"In Transit","date":"2025-05-11","time":"09:30","location":"New York"}],"history":[{"date":"2025-05-11","time":"09:30","location":"New York","status":"Shipped","UpdatedBy":"UNCE","remarks":"On time"}]}}', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(result);
    if (result.success) {
      alert('Shipment saved successfully!');
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while saving shipment.');
  }
}

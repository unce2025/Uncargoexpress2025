async function addTracking(shipmentData) {
  const url = 'https://script.google.com/macros/s/AKfycbwPDSYFvy0iburNNHhbsQ6sEPVOW_EMDSLh1mP9A_nxCZ_S3IrVuAvnHaV5rgzJMv6k/exec';

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(shipmentData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding shipment:', error);
    return { success: false, message: 'Request failed.' };
  }
}

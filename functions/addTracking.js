async function addTracking(shipmentData) {
  const url = 'https://script.google.com/macros/s/AKfycbwu3fx5fNd95SFm-skPSQT9BkMQ3oE0tblji3uttfz6D9gScWP_iqEtmy-3haoJp1R3/exec';

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

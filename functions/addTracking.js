async function addTracking(shipmentData) {
  const url = 'https://script.google.com/macros/s/AKfycbyQRQQSguXCNysA1De1ln_9R76ETlqUd-FCvu7k5oZxW7ghR6vT6W98b2g_IFwARvl1/exec';

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

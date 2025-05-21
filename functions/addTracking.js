async function addTracking(shipmentData) {
  const url = 'https://script.google.com/macros/s/AKfycbzsRTYEBO1wgjrzO_qO70rdHzXwruEzOP77n8OoTBbgO7Iomr4avJkajkzAald-l-2B/exec';

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

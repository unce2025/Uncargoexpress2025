async function addTracking(shipmentData) {
  const url = 'https://script.google.com/macros/s/AKfycbz_NrN4dnBf43IRXMw4RjsKff5C5EDbNh9XqCyjsKbyuFTcRWVZE96fGzUDmFbkQ2KW/exec';

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

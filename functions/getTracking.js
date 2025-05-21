async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbz_NrN4dnBf43IRXMw4RjsKff5C5EDbNh9XqCyjsKbyuFTcRWVZE96fGzUDmFbkQ2KW/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("🔍 Fetched result:", result);
    return result;
  } catch (error) {
    console.error('❌ Error retrieving shipment:', error);
    return { success: false, message: 'Request failed.', error: error.message };
  }
}

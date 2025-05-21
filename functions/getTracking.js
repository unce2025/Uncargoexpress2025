async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbzsRTYEBO1wgjrzO_qO70rdHzXwruEzOP77n8OoTBbgO7Iomr4avJkajkzAald-l-2B/exec?tracking=${encodeURIComponent(trackingNumber)}`;

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

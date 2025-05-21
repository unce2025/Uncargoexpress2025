async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbwPDSYFvy0iburNNHhbsQ6sEPVOW_EMDSLh1mP9A_nxCZ_S3IrVuAvnHaV5rgzJMv6k/exec?tracking=${encodeURIComponent(trackingNumber)}`;

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

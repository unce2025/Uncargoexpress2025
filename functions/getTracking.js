async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbyanpZSNK1uqclLrsBU4LdfiSeNPydOJtdT1P_1NvzpJgIlsK_OhhLlGypOGO9gCH1-/exec?trackingNumber=${encodeURIComponent(trackingNumber)}`;

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

async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbyU_rsQlWDSx92qEhJacaFvqpIrP0IH2pkDz7Pn4Y_5GWGFpFj2AKw1jvp9tyR4r48w/exec?trackingNumber=${encodeURIComponent(trackingNumber)}`;

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

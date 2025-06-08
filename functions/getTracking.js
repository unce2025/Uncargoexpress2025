async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbyM1ofgZOgcW7wc-AwJu4FC6tACZYefKaxYhMu3_fwDGTvVHEO1QZHBUwBwwp9jP6Qc/exec?trackingNumber=${encodeURIComponent(trackingNumber)}`;

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

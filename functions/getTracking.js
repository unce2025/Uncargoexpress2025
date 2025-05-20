async function getTracking(trackingNumber) {
  const url = https://script.google.com/macros/s/AKfycbwu3fx5fNd95SFm-skPSQT9BkMQ3oE0tblji3uttfz6D9gScWP_iqEtmy-3haoJp1R3/exec?tracking=${encodeURIComponent(trackingNumber)};

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error retrieving shipment:', error);
    return { success: false, message: 'Request failed.' };
  }
}

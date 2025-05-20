async function getTracking(trackingNumber) {
  const url = `https://script.google.com/macros/s/AKfycbyQRQQSguXCNysA1De1ln_9R76ETlqUd-FCvu7k5oZxW7ghR6vT6W98b2g_IFwARvl1/exec?tracking=${encodeURIComponent(trackingNumber)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error retrieving shipment:', error);
    return { success: false, message: 'Request failed.' };
  }
}

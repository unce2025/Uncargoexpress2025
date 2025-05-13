const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'shipments.json');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const trackingNumber = data.trackingNumber;

    if (!trackingNumber) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Tracking number is required." }),
      };
    }

    // Load existing data
    let shipments = {};
    if (fs.existsSync(dataFile)) {
      const fileContent = fs.readFileSync(dataFile, 'utf8');
      shipments = JSON.parse(fileContent || '{}');
    }

    // Save or update the shipment
    shipments[trackingNumber] = data;

    // Write back to file
    fs.writeFileSync(dataFile, JSON.stringify(shipments, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Shipment saved successfully!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Failed to save shipment", error: error.message }),
    };
  }
};

const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'shipments.json');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const tracking = event.queryStringParameters?.tracking;

  if (!tracking) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Tracking number is required." }),
    };
  }

  try {
    if (!fs.existsSync(dataFile)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ success: false, message: "Shipment not found." }),
      };
    }

    const shipments = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    if (!shipments[tracking]) {
      return {
        statusCode: 404,
        body: JSON.stringify({ success: false, message: "Shipment not found." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        shipment: shipments[tracking],
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Error retrieving shipment", error: error.message }),
    };
  }
};

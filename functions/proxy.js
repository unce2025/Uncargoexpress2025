const fetch = require("node-fetch");

exports.handler = async function (event) {
  const GAS_URL = "resplendent-bonbon-6f4a65";

  // Handle CORS preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
      body: ""
    };
  }

  try {
    let url = GAS_URL;
    const headers = { "Content-Type": "application/json" };
    const options = {
      method: event.httpMethod,
      headers
    };

    // For GET: append query string
    if (event.httpMethod === "GET") {
      if (event.queryStringParameters && Object.keys(event.queryStringParameters).length > 0) {
        const params = new URLSearchParams(event.queryStringParameters).toString();
        url += "?" + params;
      }
    }

    // For POST: include body
    else if (event.httpMethod === "POST") {
      options.body = event.body;
    }

    // Reject unsupported methods
    else {
      return {
        statusCode: 405,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: "Method Not Allowed"
      };
    }

    // Perform the actual fetch
    const response = await fetch(url, options);
    const text = await response.text();

    // Attempt to parse JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return {
        statusCode: 502,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Invalid JSON returned from GAS", raw: text })
      };
    }

    // Return parsed result
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message })
    };
  }
};

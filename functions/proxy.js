const fetch = require("node-fetch");

exports.handler = async function(event) {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbyoIzttXdgc9CGEgJAv_Bps7fP5ZA0X1dh-hs1g4qujGFG9ZRZ4poIDvI2tN_12OO6L/exec";

  // Handle CORS preflight request
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
      },
      body: ""
    };
  }

  try {
    let url = GAS_URL;
    const headers = { "Content-Type": "application/json" };
    let options = {
      method: event.httpMethod,
      headers,
    };

    if (event.httpMethod === "GET") {
      // Append query params from the original request
      if (event.queryStringParameters && Object.keys(event.queryStringParameters).length > 0) {
        const params = new URLSearchParams(event.queryStringParameters).toString();
        url += "?" + params;
      }
    } else if (event.httpMethod === "POST") {
      options.body = event.body;
    } else {
      return {
        statusCode: 405,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: "Method Not Allowed"
      };
    }

    const response = await fetch(url, options);
    const text = await response.text();

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
        body: JSON.stringify({ error: "Invalid JSON from GAS", raw: text })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
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

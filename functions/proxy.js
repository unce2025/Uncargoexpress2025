const fetch = require("node-fetch");

exports.handler = async function(event) {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbyYfwKHcOgHvrLZauzlg-tX2XC4VdJZawWKqQThqj4yFbmze602NuJoOTeQcAYHlgGl/exec";

  try {
    let url = GAS_URL;
    let options = {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (event.httpMethod === "GET") {
      url += event.queryStringParameters
        ? "?" + new URLSearchParams(event.queryStringParameters).toString()
        : "";
    } else if (event.httpMethod === "POST") {
      options.body = event.body;
    } else {
      return { statusCode: 405, body: "Method not allowed" };
    }

    const response = await fetch(url, options);
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Invalid JSON from GAS", raw: text })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type"
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

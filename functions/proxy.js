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
      url += event.queryStringParameters ? "?" + new URLSearchParams(event.queryStringParameters).toString() : "";
    } else if (event.httpMethod === "POST") {
      options.body = event.body;
    } else {
      return { statusCode: 405, body: "Method not allowed" };
    }

    const response = await fetch(url, options);
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: data,
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

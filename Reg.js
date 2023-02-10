const express = require("express");
const app = express();
const https = require("follow-redirects").https;

app.post("/vehicle-check", (req, res) => {
  const registrationNumber = req.body.registrationNumber;

  const options = {
    method: "POST",
    hostname: "driver-vehicle-licensing.api.gov.uk",
    path: "/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": "1LSyf8XdXW6FjayERxczr7GEqo8m4Hpda4tIbiXv",
      "Content-Type": "application/json",
    },
    maxRedirects: 20,
  };

  const req = https.request(options, response => {
    const chunks = [];

    response.on("data", chunk => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      res.send(JSON.parse(body));
    });
  });

  const postData = JSON.stringify({ registrationNumber });
  req.write(postData);
  req.end();
});

const https = require('https');

const options = {
  method: 'POST',
  hostname: 'driver-vehicle-licensing.api.gov.uk',
  path: '/vehicle-enquiry/v1/vehicles',
  headers: {
    'x-api-key': 'your_api_key_here',
    'Content-Type': 'application/json',
  },
};

const postData = JSON.stringify({ registrationNumber: 'AA19AAA' });

const req = https.request(options, (res) => {
  let chunks = [];

  res.on('data', (chunk) => {
    chunks.push(chunk);
  });

  res.on('end', () => {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(postData);

req.end();

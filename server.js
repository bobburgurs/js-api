const express = require('express');

const app = express();

// Set the port to listen on
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Serve the index.html file on a GET request to the / endpoint
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/pages/index.html`);
});

// Serve the submitted.html file on a POST request to the / endpoint
app.post('/', (req, res) => {
  res.sendFile(`${__dirname}/src/pages/submitted.html`);
});

const express = require('express');
const app = express();

app.set('trust proxy', true); // To trust the proxy's IP address

app.get('/', (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`Client's IP address is: ${clientIP}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

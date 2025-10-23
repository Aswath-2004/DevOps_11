// server.js
//v2
const express = require('express');
const app = express();
const PORT = 3000;
const VERSION = process.env.APP_VERSION || 'UNKNOWN';

// Main /status endpoint
app.get('/status', (req, res) => {
  res.status(200).json({
    status: 'ok',
    environment: VERSION, // This will be BLUE or GREEN
    message: `API Version: ${VERSION} is active.`,
    timestamp: new Date().toISOString()
  });
});

res.send({
    status: 'ok',
    environment: process.env.APP_VERSION || 'UNKNOWN',
    message: 'API Version: Deployment Candidate V1.1 is ready!' 
    // Previous message was 'API Version: BLUE is active.'
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} with version ${VERSION}`);
});

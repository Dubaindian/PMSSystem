const express = require('express');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'vms-khoory-pms',
    environment: process.env.VERCEL_ENV || 'production',
    timestamp: new Date().toISOString(),
  });
});

app.use((_request, response) => response.status(404).json({ error: 'Not found' }));

module.exports = app;

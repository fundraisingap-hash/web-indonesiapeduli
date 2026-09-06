import http from 'node:http';
import { createHmac } from 'node:crypto';
import { randomUUID } from 'node:crypto';

const PORT = 3456;
const SANDBOX_URL = 'https://openapi.sandbox.xenithpay.com';

// Default Xenith Sandbox Keys
const DEFAULT_API_KEY = 'ak-9a7a30e1baebf189bb9b01e0d4fddca21712b47ac9a7cb29b22aa4d5408f2a98';
const DEFAULT_SECRET_KEY = 'sk-95e5df2c2238dffc0c37f16a374ae4ce8e2389a6903156981111f9d5b047817ea27f6b0c16c3a9f4ae92d18f51be7c7505962fea5bad76c3abede199b03ec4a2';

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/xenith/create-payin') {
    let body = '';
    for await (const chunk of req) body += chunk;

    try {
      const parsed = JSON.parse(body);
      const apiKey = parsed.apiKey || DEFAULT_API_KEY;
      const secretKey = parsed.secretKey || DEFAULT_SECRET_KEY;
      const payinData = parsed.payinData;

      // Build Xenith request
      const method = 'POST';
      const uri = '/v1/payins';
      const timestamp = new Date().toISOString();
      const requestBody = JSON.stringify(payinData);
      const idempotencyKey = randomUUID();

      // HMAC SHA256 signature
      const signaturePayload = method + '\n' + uri + '\n' + timestamp + '\n' + requestBody;
      const hash = createHmac('sha256', secretKey).update(signaturePayload).digest('base64');

      console.log(`[${new Date().toLocaleTimeString()}] → POST ${uri}`);
      console.log(`  API Key: ${apiKey.substring(0, 10)}...`);
      console.log(`  Amount: ${payinData.initiatedAmount} ${payinData.currency}`);
      console.log(`  Channel: ${payinData.paymentMethod} / ${payinData.paymentChannel}`);

      // Call Xenith API
      const response = await fetch(SANDBOX_URL + uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Xenith-Api-Key': apiKey,
          'Xenith-Request-Timestamp': timestamp,
          'Xenith-Request-Signature': hash,
          'X-Idempotency-Key': idempotencyKey,
        },
        body: requestBody,
      });

      const data = await response.json();
      console.log(`  ← Status: ${response.status}`);
      console.log(`  Response:`, JSON.stringify(data).substring(0, 200));

      res.writeHead(response.status);
      res.end(JSON.stringify(data));
    } catch (err) {
      console.error('  ✗ Error:', err.message);
      res.writeHead(500);
      res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
    }
    return;
  }

  // Health check
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'ok', service: 'Xenith Pay Proxy' }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`\n🚀 Xenith Pay Proxy running on http://localhost:${PORT}`);
  console.log(`   POST /api/xenith/create-payin → proxy to Xenith sandbox`);
  console.log(`   GET  /health → health check\n`);
});

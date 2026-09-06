// proxy-server.cjs — Xenith Payment Gateway Proxy
// Run: node proxy-server.cjs
const http = require('http');
const https = require('https');
const PORT = 3456;

function getXenithHost(apiKey, sandbox) {
  // Sandbox jika: flag sandbox aktif, atau key diawali 'ak-' dan ada hint sandbox
  if (sandbox) return 'api.sandbox.xenithpay.com';
  // Default production
  return 'api.xenithpay.com';
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.url === '/api/xenith/create-payin' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { apiKey, secretKey, payinData, sandbox } = payload;
        if (!apiKey || !secretKey) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: true, message: 'Access Key & Secret Key wajib diisi di Pengaturan Admin.' }));
          return;
        }
        const xenithHost = getXenithHost(apiKey, sandbox);
        const basicAuth = Buffer.from(apiKey + ':' + secretKey).toString('base64');
        const postData = JSON.stringify(payinData);
        console.log('[Xenith] Mode:', sandbox ? 'SANDBOX' : 'LIVE', '| Host:', xenithHost);
        const options = {
          hostname: xenithHost,
          path: '/v1/payin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + basicAuth,
            'Content-Length': Buffer.byteLength(postData),
          },
        };
        const xenithReq = https.request(options, (xenithRes) => {
          let data = '';
          xenithRes.on('data', chunk => { data += chunk; });
          xenithRes.on('end', () => {
            console.log('[Xenith] Response:', xenithRes.statusCode, data.slice(0, 200));
            res.writeHead(xenithRes.statusCode, { 'Content-Type': 'application/json' });
            res.end(data);
          });
        });
        xenithReq.on('error', (err) => {
          console.error('[Xenith] Error:', err.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: true, message: 'Gagal terhubung ke Xenith: ' + err.message }));
        });
        xenithReq.write(postData);
        xenithReq.end();
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: true, message: 'Invalid request: ' + e.message }));
      }
    });
    return;
  }

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'Xenith Pay Proxy', port: PORT }));
    return;
  }
  res.writeHead(404); res.end('Not found');
});

server.listen(PORT, () => {
  console.log('✅ Xenith Proxy running at http://localhost:' + PORT);
});

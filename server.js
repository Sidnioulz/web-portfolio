const fs = require('fs');
const http = require('http');
const https = require('https');
const next = require('next');
const express = require('express');

// Read env and initialise Next.
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Initialise the Express server serving Next's files and other static folders.
  const expressApp = express();

  expressApp.use(
    express.static(`${__dirname}/acme-challenge`, {
      maxage: dev ? '0' : '365d',
    }),
  );

  expressApp.get('*', (req, res) => handle(req, res));

  // Start the HTTP server available in all environments.
  const httpServer = http.createServer(expressApp);
  httpServer.listen(port, (err) => {
    if (err) throw err;
  });

  // On production, start the HTTPS server too.
  if (!dev) {
    const privateKey = fs.readFileSync('/etc/letsencrypt/live/sdl.design/privkey.pem', 'utf8');
    const certificate = fs.readFileSync('/etc/letsencrypt/live/sdl.design/cert.pem', 'utf8');
    const ca = fs.readFileSync('/etc/letsencrypt/live/sdl.design/chain.pem', 'utf8');

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca,
    };

    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(443, () => {});
  }
});

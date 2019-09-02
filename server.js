// Base dependencies.
const next = require('next');
const express = require('express');
const http = require('http');

// HTTPS / Security dependencies.
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

// Mailing service dependencies.
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Read env and initialise Next.
const port = parseInt(process.env.PORT, 10) || 3000;
const securePort = parseInt(process.env.SECUREPORT, 10) || 3443;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

// Initialise mailing service, and provide an async wrapper to it.
const transporter = nodemailer.createTransport({
  sendmail: true,
  name: 'sdl.design',
  path: '/usr/sbin/sendmail',
});
const sendMail = message => new Promise((resolve, reject) => {
  transporter.sendMail(message, (error, info) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(info);
  });
});

nextApp.prepare().then(() => {
  // Initialise the Express server serving Next's files and other static folders and services.
  const expressApp = express();
  expressApp.use(bodyParser.urlencoded({ extended: true }));

  // Serve the ACME challenge folder for certificate renewals.
  expressApp.use(
    express.static(`${__dirname}/acme-challenge`, {
      maxage: dev ? '0' : '365d',
    }),
  );

  // Serve emails over the contact API, used by /pages/contact.
  expressApp.post('/api/contact', async (req, res, nextHandler) => {
    try {
      const {
        name, company, email, message,
      } = req.body;
      await sendMail({ text: `Name: ${name}<br/>Company: ${company}<br/>Email: ${email}<br/><hr/>${message}` });

      res.end('success');
    } catch (error) {
      nextHandler(error);
    }
  });

  // In production, add Helmet headers and redirect to HTTPS. In dev, serve in HTTP.
  if (dev) {
    expressApp.get('*', (req, res) => nextHandle(req, res));
  } else {
    expressApp.use(helmet());
    expressApp.get('*', (req, res) => ((req.secure)
      ? nextHandle(req, res)
      : res.redirect(301, `https://${req.hostname}${req.url}`)));
  }

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

    const httpsServer = https.createServer(credentials, expressApp);
    httpsServer.listen(securePort, (err) => {
      if (err) throw err;
    });
  }
});

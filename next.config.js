const path = require('path');
const dotenvLoad = require('dotenv-load');
const withSass = require('@zeit/next-sass');

dotenvLoad();

module.exports = withSass({
  // cssModules: true,
  env: {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});

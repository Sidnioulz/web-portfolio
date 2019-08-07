const path = require('path');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = (nextConfig = {}) => Object.assign({}, nextConfig, {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  env: {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN,
  },
});

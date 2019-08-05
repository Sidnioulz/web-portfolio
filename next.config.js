const path = require('path');

module.exports = (nextConfig = {}) => Object.assign({}, nextConfig, {
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
});

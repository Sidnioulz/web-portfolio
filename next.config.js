const path = require('path');
const dotenvLoad = require('dotenv-load');
const withSass = require('@zeit/next-sass');

dotenvLoad();

const rootFolder = path.resolve('./');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  sassLoaderOptions: {
    includePaths: [rootFolder],
  },
  env: {
    FIGMA_TOKEN: process.env.FIGMA_TOKEN,
  },
  webpack: (config) => {
    config.resolve.modules.push(rootFolder);
    return config;
  },
});

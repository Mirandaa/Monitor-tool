//config-overrides.js
const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');
const resolveAlias = dir => path.join(__dirname, '.', dir);
module.exports = override(
  addWebpackAlias({
    '@': resolveAlias('src')
  }),
  addLessLoader({
    noIeCompat: true,
    javascriptEnabled: true,
    sourceMap: false,
    cssModules: {
      localIdentName: "[name]__[local]___[hash:base64:5]",
    }
  })
)
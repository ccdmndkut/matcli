// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        extractComments: true,
        warnings: false
      })
    ]
  }
};

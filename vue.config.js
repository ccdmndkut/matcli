// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        include: ['src', 'components'],
        extractComments: true,
        uglifyOptions: {
          warnings: false
        }
      })
    ]
  }
};

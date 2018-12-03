// vue.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        uglifyOptions: {
          comments: false
        }
      })
    ]
  }
};

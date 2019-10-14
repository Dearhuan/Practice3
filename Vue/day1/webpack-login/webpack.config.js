const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js', //入口
  output: { //出口
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.html$/,
      use: 'html-loader'
    } ]
  }

};
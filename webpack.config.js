const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       //此时用的是use没用inculde exclude
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         'url-loader'
  //       ]
  //     }
  //   ]
  // }
};
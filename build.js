const webpack = require('webpack');
const path = require('path');

webpack({
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist')
  },
  optimization: {
    minimize: false,
    splitChunks: {
      name: 'vendor'
    }
  }
}).run(err => {
  if (err) console.log(err);
});

const webpack = require('webpack');
const path = require('path');

webpack({
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist')
  },
  resolve: {
    alias: {
      'learn-npm-pkg-a': path.resolve(__dirname, './node_modules/learn-npm-pkg-a/')
    }
  },
  optimization: {
    minimize: false
  }
}).run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stats.toString({
    chunks: false, // 使构建过程更静默无输出
    colors: true // 在控制台展示颜色
  }));
});

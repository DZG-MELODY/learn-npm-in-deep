const webpack = require('webpack');
const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

webpack({
  mode: 'development',
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist')
  },
  optimization: {
    minimize: false
  },
  plugins: [new DuplicatePackageCheckerPlugin()]
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

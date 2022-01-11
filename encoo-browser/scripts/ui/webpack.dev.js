const commonConfig = require('./webpack.commom');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'eval',
  plugins: commonConfig.plugins.concat([new BundleAnalyzerPlugin()]),
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true
  }
};

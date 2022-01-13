const commonConfig = require('./webpack.commom');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
commonConfig.plugins.splice(0, 0, new ReactRefreshWebpackPlugin());
commonConfig.module.rules[3].use.options.plugins.splice(0, 0, 'react-refresh/babel');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  ...commonConfig,
  mode: 'development',
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true
  }
};

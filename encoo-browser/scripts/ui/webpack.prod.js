const commonConfig = require('./webpack.commom');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
module.exports = {
  ...commonConfig,
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), ...commonConfig.plugins]
};

const { resolve, join } = require('path');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dev = process.env.DEV === '1';

module.exports = {
  target: 'electron-main',
  mode: dev ? 'development' : 'production',
  watch: dev,
  devtool: dev ? 'eval-source-map' : false,
  entry: {
    main: './src/browser/main.ts'
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: {
                    version: '3',
                    proposals: true
                  }
                }
              ],
              '@babel/preset-typescript'
            ],
            plugins: [
              [
                '@babel/plugin-proposal-decorators',
                {
                  legacy: true
                }
              ],
              [
                '@babel/plugin-proposal-private-property-in-object',
                {
                  loose: true
                }
              ],
              [
                '@babel/plugin-proposal-private-methods',
                {
                  loose: true
                }
              ],
              [
                '@babel/plugin-proposal-class-properties',
                {
                  loose: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist/browser')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    keytar: `require('keytar')`,
    electron: 'require("electron")',
    fs: 'require("fs")',
    os: 'require("os")',
    path: 'require("path")'
  },
  stats: {
    colors: true,
    env: true,
    errors: true,
    performance: true
  }
};

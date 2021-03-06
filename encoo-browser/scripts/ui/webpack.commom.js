const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { getThemeVariables } = require('antd/dist/theme');

var fs = require('fs');
const files = fs.readdirSync(path.resolve(__dirname, '../../src/views/pages')).map((file) => file.split('.')[0]);
const entries = {};
files.forEach((fileName) => {
  entries[fileName] = `./src/views/pages/${fileName}.tsx`;
});
const htmls = files.map((fileName) => new HtmlWebpackPlugin({ template: `src/index.html`, filename: `${fileName}.html`, chunks: [fileName] }));
module.exports = {
  mode: 'production',
  entry: entries,
  plugins: [...htmls, new ForkTsCheckerWebpackPlugin(), new WebpackManifestPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
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
              '@babel/preset-react',
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
              ],
              [
                'import',
                {
                  libraryName: 'antd',
                  libraryDirectory: 'es',
                  style: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: getThemeVariables({
                  dark: true, // ??????????????????
                  compact: true // ??????????????????
                })
                // modifyVars: {
                //   'primary-color': 'red'
                // }
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../../dist/ui')
  },
  resolve: {
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
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          name: 'common',
          test: /[\\/]node_modules[\\/]/, // ??????node_modules??????????????????
          priority: -10
        }
      }
    }
  }
};

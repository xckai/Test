const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var fs = require('fs');
const files = fs.readdirSync(path.resolve(__dirname, '../../src/ui/Pages')).map((file) => file.split('.')[0]);
const entries = {};
files.forEach((fileName) => {
  entries[fileName] = `./src/ui/Pages/${fileName}.tsx`;
});
const htmls = files.map((fileName) => new HtmlWebpackPlugin({ template: `src/ui/index.html`, filename: `${fileName}.html`, chunks: [fileName] }));
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
                javascriptEnabled: true
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
          test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的文件
          priority: -10
        }
      }
    }
  }
};

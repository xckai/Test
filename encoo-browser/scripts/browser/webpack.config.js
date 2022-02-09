const { resolve, join } = require('path');
const path = require('path');
const { spawn, execSync } = require('child_process');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.DEV === '1';

process.env.NODE_ENV = dev ? 'development' : 'production';
let electronProcess;

module.exports = {
  target: 'electron-main',
  mode: dev ? 'development' : 'production',
  watch: dev,
  watchOptions: {
    ignored: ['**/src/views/**/*.tsx', '**/node_modules']
  },
  devtool: dev ? 'eval-source-map' : false,
  entry: {
    entry: './src/entry.ts'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (file) => {
          if (!dev) {
            return;
          }
          if (electronProcess) {
            try {
              if (process.platform === 'win32') {
                execSync(`taskkill /pid ${electronProcess.pid} /f /t`);
              } else {
                electronProcess.kill();
              }

              electronProcess = null;
            } catch (e) {}
          }

          electronProcess = spawn('npm', ['run start-electron'], {
            shell: true,
            env: process.env,
            stdio: 'inherit'
          });
        });
      }
    }
  ],
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
                  targets: {
                    node: 'current'
                  },
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
    path: path.resolve(__dirname, '../../dist')
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

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var config = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './index.js',
  },
  output: {    
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  module: {
    loaders : [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: __dirname,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app'),
    
    // makes webpack output less verbose
    noInfo: true,
    stats: 'errors-only',
  },
};

module.exports = config;

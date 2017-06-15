const webpack = require('webpack');
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
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app'),
  },
};

module.exports = config;

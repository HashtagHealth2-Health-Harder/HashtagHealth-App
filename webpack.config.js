const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, './app'),
  build: path.join(__dirname, './build'),
  node: path.join(__dirname, './node_modules'),
};

var config = {
  entry: PATHS.app + '/index.jsx',
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders : [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        },
        include: PATHS.app
      },
    ]
  }
};

module.exports = config;

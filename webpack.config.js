
'use strict';

var webpack = require('webpack');
var secret = require('./secrets');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        transform: function(content, path) {
          return content.toString().replace(secret, "AIzaSyCywkqjQe8n46Sd-xg2DWuwNBHRRm7w8fU");
        },
        from: './public/index.html'
      }
    ])
  ],
  module: {
    loaders: [
      {
        test: /js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};

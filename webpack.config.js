'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    babelrc: true,
    presets: [require.resolve('@babel/preset-react')]
  }
};


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Corario',
      template: './src/index.html'
    })
  ]
};

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
    filename: 'assets/js/[name]-[chunkhash].js',
    chunkFilename: 'assets/js/[name]-[chunkhash].js',
    publicPath: 'https://ma0c.github.io/corario/'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [babelLoader]
      },
      {
        test: /\.md$/,
        use: [require.resolve('raw-loader')]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Corario',
      template: './src/index.html'
    })
  ]
};
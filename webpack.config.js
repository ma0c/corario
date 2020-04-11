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
    publicPath: '/'
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
      {
        test: /\.musicxml$/,
        use: [require.resolve('raw-loader')]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            query: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          },

        ],
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

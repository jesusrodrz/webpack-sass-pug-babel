// webpack v4
const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const views = require('./webpack.helper.js')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  stats: {
    modules: false,
    colors: true,
    version: false,
    children: false
  },
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    ...views.pages({
      srcDir: './src/pug',
      filesExt: 'pug'
    })
  ]
};
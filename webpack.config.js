// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],

  module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /node_modules/,
       use: [
         'babel-loader',
       ],
     },
     {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    },
    {
        test: /\.(png|jpg|gif|woff|woff2|eot|[ot]f)$/,
        use: [
          'file-loader',
        ],
      },
   ],
 },

 resolve: {
    extensions: ['.js', '.jsx'],
  },
};

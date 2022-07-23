const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './demo'),
    },
    open: false,
    hot: false,
    compress: false,
    port: 9000,
    liveReload: true,
  },
});

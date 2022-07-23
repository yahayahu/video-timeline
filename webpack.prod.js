const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader', options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env'), require('autoprefixer')],
                minimize: false,
              },
              sourceMap: true,
            },
          },
          {loader: 'sass-loader'},
        ],
      },
    ]
  }
});

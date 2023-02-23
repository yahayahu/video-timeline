const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('progress-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    'video-timeline': './src/scripts/timeline.ts',
    'video-timeline.min': './src/scripts/timeline.ts',
  },
  devtool: false,
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      verbose: true
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  performance: {
    hints: 'error',
    maxAssetSize: 500000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: false
            },
          },
          {
            loader: 'postcss-loader', options: {
              postcssOptions: {
                plugins: [postcssPresetEnv(), autoprefixer()],
                minimize: false,
              },
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          mangle: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
        include: /\.min\.js$/
      }),
      new CssMinimizerPlugin({
        include: /\.min\.css$/
      }),
    ],
  },
});

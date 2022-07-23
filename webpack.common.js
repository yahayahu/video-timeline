const path = require('path');

module.exports = {
  entry: {
    'video-timeline': ['./src/scripts/index.ts', './src/styles/index.scss'],
  },
  target: 'node',
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          'ts-loader'
        ],
      },
      {
        test: /src\/*\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions:  ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
    },
  },
  performance: {
    hints: 'error',
    maxAssetSize: 500000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist/',
    library: 'VideoTimeline',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  }
};

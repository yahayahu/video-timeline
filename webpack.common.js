const path = require('path');

module.exports = {
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'VideoTimeline',
    globalObject: 'this',
    umdNamedDefine: true,
    libraryExport: 'default'
  }
};

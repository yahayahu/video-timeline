const path = require('path');

module.exports = {
  target: "web",
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions:  ['.ts', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ["VideoTimeline", "[name]"],
    libraryTarget: "umd",
  },
  plugins: [
  ],
};

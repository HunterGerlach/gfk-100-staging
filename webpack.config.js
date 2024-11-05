const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js'), // Updated entry point to src/index.js
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output to a 'dist' directory (recommended for production builds)
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname), // Point to root if index.html is there
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
};

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js'), // Updated entry point to src/index.js
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output to a 'dist' directory
    publicPath: '/',
  },

  devtool: false, // Disable source maps for production

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: true, // Remove console statements for production
          },
        },
        extractComments: false,
      }),
    ],
  },
};

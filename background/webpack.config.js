const WebpackObfuscator = require('webpack-obfuscator');
const path = require('path');

module.exports = {
  mode: 'production', // /popup will take care of the configurations

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'background.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true
      },
      []
    )
  ]
};

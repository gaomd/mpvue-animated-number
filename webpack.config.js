const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname + '/src'),
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/AnimatedNumber.vue'),
        to: path.resolve(__dirname, 'dist/'),
        ignore: ['.*']
      }
    ])
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname, 'src/polyfills/animation-frame-polyfill.js'),
    output: {
      filename: 'polyfills/animation-frame-polyfill.js',
      libraryTarget: 'commonjs',
      library: '@gaomd/mpvue-animated-number/polyfills/animation-frame-polyfill',
    }
  })
];

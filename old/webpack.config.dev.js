var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './scripts/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'scripts')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'css'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      // Fonts
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: path.join(__dirname, 'css'),
        loader: 'file-loader'
      }
    ]
  }
};

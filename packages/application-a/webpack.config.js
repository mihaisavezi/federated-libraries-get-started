const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  entry: './src/index',
  output: {
    publicPath: 'http://localhost:3001/', // New
  },
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },

  plugins: [
    // New
    new ModuleFederationPlugin({
      name: 'application_a',
      library: { type: 'var', name: 'application_a' },
      filename: 'remoteEntry.js',
      // TESTING - when parent exposes nothing
      // exposes: {
      //   'SharedFromA': './src/app',
      // },
      exposes: {
        'SharedFromA': './src/app',
      },
      remotes: {
        'application_b': 'application_b',
      },
      shared: ['lit-element', 'lit-html'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
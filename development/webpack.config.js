const webpackConfig = require('../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

const HTML_TEMPLATE_PATH = join(__dirname, 'index.ejs');

module.exports = {
  ...webpackConfig,
  mode: 'development',
  plugins: (webpackConfig.plugins || []).concat([new HtmlWebpackPlugin({ template: HTML_TEMPLATE_PATH })])
};

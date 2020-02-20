const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/register.ts'),
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      '@config': path.join(__dirname, `config/${process.env.PROFILE || 'dev'}.ts`)
    }
  },
  output: {
    filename: 'seller-store-editor.min.js',
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
    jsonpFunction: "sellerStoreEditorWebpackJsonp"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'to-string-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
};

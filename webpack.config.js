var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app/app.js"
  },
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          minimize: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      inject: "body"
    })
  ],
  devServer: {
    contentBase: "./src/public",
    stats: "minimal",
    host: "0.0.0.0"
  }
};

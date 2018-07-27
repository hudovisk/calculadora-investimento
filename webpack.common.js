const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: [
    path.resolve(__dirname, "src/polyfils.ts"),
    path.resolve(__dirname, "src/index.tsx")
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /FachadaWSSGS\.wsdl$/,
        loader: "file-loader",
        query: {
          limit: 1,
          name: "[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@features": path.resolve(__dirname, "src/features"),
      "@assets": path.resolve(__dirname, "assets")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "assets/index.html")
    })
  ]
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./src/main.js"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "src/main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      // },
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   loader: "file-loader",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/sound",
          to: "src/sound",
          toType: "dir",
        },
      ],
    }),
  ],

  devServer: {
    port: 3000,
  },
};

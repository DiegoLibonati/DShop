const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "http://localhost:8085/",
  },
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: "/index.html",
    },
    hot: false,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "product_detail",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductDetailApp": "./src/bootstrap.ts",
      },
      remotes: {
        shared_react: "shared_react@http://localhost:8082/remoteEntry.js",
        shared_angular: "shared_angular@http://localhost:8083/remoteEntry.js",
        shared_core: "shared_core@http://localhost:8084/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

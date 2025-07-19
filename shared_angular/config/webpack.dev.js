const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "http://localhost:8083/",
    // clean: true,
  },
  devServer: {
    port: 8083,
    liveReload: true,
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "shared_angular",
      filename: "remoteEntry.js",
      exposes: {
        "./SharedAngular": "./src/bootstrap.ts",
      },
      shared: {
        ...packageJson.dependencies,
        "zone.js": { singleton: false, eager: true, requiredVersion: false },
      },
    }),
  ],
});

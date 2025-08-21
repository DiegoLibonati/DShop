const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/product_detail/latest/",
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
    }),
    new ModuleFederationPlugin({
      name: "product_detail",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductDetailApp": "./src/bootstrap.ts",
      },
      remotes: {
        shared_react: "shared_react@/shared_react/latest/remoteEntry.js",
        shared_angular: "shared_angular@/shared_angular/latest/remoteEntry.js",
        shared_core: "shared_core@/shared_core/latest/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

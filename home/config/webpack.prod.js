const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/home/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomeApp": "./src/bootstrap",
      },
      remotes: {
        shared_react: `shared_react@/shared_react/latest/remoteEntry.js`,
        shared_angular: `shared_angular@/shared_angular/latest/remoteEntry.js`,
        shared_utils: `shared_utils@/shared_utils/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
});

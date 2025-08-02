const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/shared_utils/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shared_utils",
      filename: "remoteEntry.js",
      exposes: {
        "./SharedUtils": "./src/bootstrap.tsx",
        "./SharedUtilsEnums": "./src/entities/enum.d.ts",
        "./SharedUtilsProps": "./src/entities/props.d.ts",
        "./SharedUtilsStyles": "./src/index.css",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

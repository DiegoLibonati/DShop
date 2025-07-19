const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common");
const packageJson = require("./package.json");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/shared_angular/latest/",
    // clean: true,
  },
  plugins: [
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

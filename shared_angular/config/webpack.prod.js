const path = require("path");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common = require("./webpack.common");
const packageJson = require(path.resolve(__dirname, "../package.json"));

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
        "./SharedAngularEnums": "./src/app/entities/enum.ts",
        "./SharedAngularProps": "./src/app/entities/props.ts",
        "./SharedAngularEntities": "./src/app/entities/entities.ts",
      },
      remotes: {
        shared_react: `shared_react@/shared_react/latest/remoteEntry.js`,
        shared_utils: `shared_utils@/shared_utils/latest/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        "zone.js": {
          singleton: false,
          eager: true,
          requiredVersion: packageJson.dependencies["zone.js"],
        },
      },
    }),
  ],
});

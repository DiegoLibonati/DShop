const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
    hot: false,
    liveReload: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        home: "home@http://localhost:8081/remoteEntry.js",
        shared_angular: "shared_angular@http://localhost:8083/remoteEntry.js",
        shared_core: "shared_core@http://localhost:8084/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
});

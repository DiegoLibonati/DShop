const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            issuer: /\.component\.ts$/,
            type: "asset/source",
          },
          {
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "../src"),
    },
  },
};

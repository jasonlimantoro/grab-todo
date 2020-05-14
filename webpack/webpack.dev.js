const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("./path");
const envs = require("../src/env");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.outputDir,
    port: 9000,
    compress: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: envs.BACKEND_HOST,
        pathRewrite: { "^/api": "" },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 9001, openAnalyzer: false }),
  ],
};

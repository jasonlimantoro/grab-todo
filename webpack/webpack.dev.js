const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("./path");

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
        target: "http://localhost:8888/grab-todo/wp-json/grab-todo/v1",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerPort: 9001, openAnalyzer: false }),
  ],
};

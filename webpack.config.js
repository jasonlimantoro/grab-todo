const common = require("./webpack/webpack.common");
const webpackMerge = require("webpack-merge");

const env = process.env.NODE_ENV || "dev";
const envToFilePrefix = {
  development: "dev",
  production: "prod",
};
const specific = require(`./webpack/webpack.${envToFilePrefix[env]}.js`);

const config = webpackMerge(common, specific);

module.exports = config;

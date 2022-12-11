const { merge } = require("webpack-merge");
const commonConfigJS = require("./webpack.config.js");

module.exports = merge(commonConfigJS, {
  mode: "development",
});

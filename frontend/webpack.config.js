var webpack = require("webpack");
var path = require("path");

var SRC = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: SRC + "/index.js",
  output: {
    path: OUTPUT,
    filename: "packed.js"
  },
  module: {
    loaders: [{
        include: SRC,
        loader: "babel",
    }]
  }
};

module.exports = config;

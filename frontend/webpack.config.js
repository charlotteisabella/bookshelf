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
    loaders: [
      {
        include: SRC,
        loader: "babel",
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      }
    ]
  }
};

module.exports = config;

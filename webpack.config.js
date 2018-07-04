var path = require("path");
var plugins = [];

var config = {
  entry: {
    index: path.resolve(__dirname, "index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "arrayIA",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this"
  },
  externals: {},
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["env"]
        }
      }
    ]
  }
};

module.exports = config;

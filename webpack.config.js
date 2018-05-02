var path = require('path');
var webpack = require('webpack');
var node_modules_dir = __dirname + '/node_modules';
var min= process.argv.indexOf("--min")===-1?false:true;
var plugins=[];

var config = {
    entry: {
      "index":path.resolve(__dirname, 'index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: "arrayIA",
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {},
    plugins: plugins,
    module: {
        rules: [
          {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              cacheDirectory:true,
              presets: ['env']
            }
          }
        ],
    }
};


module.exports = config;

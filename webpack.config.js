"use strict";

const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  context: __dirname,
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".json", ".vue"]
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "segel.min.js",
    library: "Segel",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    vue: {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    },
    interactjs: {
      commonjs: "interactjs",
      commonjs2: "interactjs",
      amd: "interactjs",
      root: "interact"
    }
  },
  plugins: [new VueLoaderPlugin()],
  devtool: false,
  performance: {
    hints: false
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false
  }
};

module.exports = {
  configureWebpack: {
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
    }
  }
};

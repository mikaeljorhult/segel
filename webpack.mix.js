let mix = require("laravel-mix");

// Output UMD for module or as global object Segel.
mix.webpackConfig({
  output: {
    library: "Segel",
    libraryTarget: "umd",
    libraryExport: "default",
    umdNamedDefine: true
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
  }
});

// Process JavaScript and Sass.
mix.js("src/index.js", "dist").sass("src/styles/main.scss", "dist");

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
    vue: "Vue",
    interactjs: "interact"
  }
});

// Process JavaScript and Sass.
mix.js("src/index.js", "dist").sass("src/styles/main.scss", "dist");

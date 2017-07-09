let mix = require('laravel-mix');

// Output UMD for module or as global object Segel.
mix.webpackConfig({
  output: {
    library: 'Segel',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  }
});

// Process JavaScript and Sass.
mix.js('src/index.js', 'dist')
  .standaloneSass('src/styles/main.scss', 'dist')
  .styles([
    'node_modules/flatpickr/dist/flatpickr.css',
    'dist/main.css'
  ], 'dist/main.css');

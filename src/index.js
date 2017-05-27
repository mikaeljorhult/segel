'use strict';

// Dependencies.
let Vue = require('vue');

// Components.
let Main = require('./components/main.vue');

// Create Vue instance.
const Segel = new Vue({ // eslint-disable-line
  el: '#segel',
  template: '<segel-main />',
  components: {
    'segel-main': Main
  }
});

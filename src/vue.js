'use strict';

// Dependencies.
import Vue from 'vue';

// Components.
import Main from './components/main.vue';

/**
 * Root element for Vue.
 *
 * @type {Vue}
 */
const Instance = new Vue({
  template: '<segel-main></segel-main>',

  components: {
    'segel-main': Main
  }
});

export default Instance;

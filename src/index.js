'use strict';

// Dependencies.
import Vue from 'vue';

// Components.
import Main from './components/main.vue';

// Create Vue instance.
const Segel = new Vue({ // eslint-disable-line
  el: '#segel',
  template: '<segel-main v-bind:objects="objects"></segel-main>',

  components: {
    'segel-main': Main
  },

  data: {
    'objects': [
      { name: 'Object 1' },
      { name: 'Object 2' }
    ]
  }
});

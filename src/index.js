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
    'start': 1483225200,
    'end': 1483311600,
    'steps': 48,
    'objects': [
      { id: 1, name: 'Object 1', bookings: [
        { id: 1, start: 1483264800, 'end': 1483311600 }
      ] },
      { id: 2, name: 'Object 2', bookings: [] }
    ]
  }
});

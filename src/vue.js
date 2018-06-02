'use strict';

// Dependencies.
import Vue from 'vue';
// Components.
import Main from './components/main.vue';
import Store from './store/store';

/**
 * Root element for Vue.
 *
 * @type {Vue}
 */
const Instance = new Vue({
  template: '<segel-main v-bind:resources="resources" v-bind:bookings="bookings"></segel-main>',

  components: {
    'segel-main': Main
  },

  store: Store,

  computed: {
    resources: function () {
      return this.$store.getters['resources/all'];
    },
    bookings: function () {
      return this.$store.getters['bookings/all'];
    }
  }
});

export default Instance;

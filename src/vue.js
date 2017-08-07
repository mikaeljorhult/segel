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
  template: '<segel-main v-bind:objects="objects" v-bind:bookings="bookings"></segel-main>',

  components: {
    'segel-main': Main
  },

  store: Store,

  computed: {
    objects: function () {
      return this.$store.state.objects.all;
    },
    bookings: function () {
      return this.$store.state.bookings.all;
    }
  }
});

export default Instance;

"use strict";

// Dependencies.
import Vue from "vue";

// Components.
import Main from "./components/main.vue";

/**
 * Root element for Vue.
 *
 * @type {Vue}
 */
const Instance = new Vue({
  template:
    "<segel-main v-bind:bookings='bookings' v-bind:resources='resources' v-bind:time='time'></segel-main>",

  components: {
    "segel-main": Main
  },

  data: function() {
    return {
      bookings: [],
      resources: [],
      time: {}
    };
  }
});

export default Instance;

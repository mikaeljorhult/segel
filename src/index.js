'use strict';

// Dependencies.
import Vue from 'vue';

// Components.
import Main from './components/main.vue';
import Events from './helpers/events.js';
import Store from './helpers/store.js';

// Create Vue instance.
const Segel = new Vue({
  el: '#segel',
  template: '<segel-main v-bind:objects="objects" v-bind:bookings="bookings"></segel-main>',

  beforeMount: function () {
    // Get attributes from root element if present.
    this.start = this.$el.getAttribute('start') ? parseInt(this.$el.getAttribute('start')) : this.start;
    this.end = this.$el.getAttribute('end') ? parseInt(this.$el.getAttribute('end')) : this.end;
    this.steps = this.$el.getAttribute('steps') ? parseInt(this.$el.getAttribute('steps')) : this.steps;
    this.objects = this.$el.getAttribute('objects') ? this.$el.getAttribute('objects') : this.objects;
    this.bookings = this.$el.getAttribute('bookings') ? this.$el.getAttribute('bookings') : this.bookings;
  },

  components: {
    'segel-main': Main
  },

  data: Store.state,

  computed: {
    duration: function () {
      return this.end - this.start;
    }
  }
});

// Republish events.
Events.$on('add', function (data) {
  Segel.$emit('add', data);
});

Events.$on('change', function (data) {
  Segel.$emit('change', data);
});

export default Segel;

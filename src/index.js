'use strict';

// Dependencies.
import Vue from 'vue';

// Components.
import Main from './components/main.vue';
import Events from './helpers/events.js';

// Create Vue instance.
const Segel = new Vue({
  el: '#segel',
  template: '<segel-main v-bind:objects="objects"></segel-main>',

  beforeMount: function () {
    // Get attributes from root element if present.
    this.start = this.$el.getAttribute('start') ? parseInt(this.$el.getAttribute('start')) : this.start;
    this.end = this.$el.getAttribute('end') ? parseInt(this.$el.getAttribute('end')) : this.end;
    this.steps = this.$el.getAttribute('steps') ? parseInt(this.$el.getAttribute('steps')) : this.steps;
    this.objects = this.$el.getAttribute('objects') ? this.$el.getAttribute('objects') : this.objects;
  },

  components: {
    'segel-main': Main
  },

  props: {
    start: {
      type: Number,
      default: function () {
        return Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);
      }
    },
    end: {
      type: Number,
      default: function () {
        return Math.floor(new Date().setHours(23, 59, 59, 999) / 1000);
      }
    },
    steps: {
      type: Number,
      default: 48
    },
    objects: {
      type: Array,
      default: function () {
        return [
          {id: 1, name: 'Object 1', bookings: [{id: 1, start: 1483264800, 'end': 1483311600}]},
          {id: 2, name: 'Object 2', bookings: []}
        ];
      }
    }
  },

  data: {},

  computed: {
    duration: function () {
      return this.end - this.start;
    }
  }
});

// Republish change events.
Events.$on('change', function (data) {
  Segel.$emit('change', data);
});

export default Segel;

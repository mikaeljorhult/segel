'use strict';

// Dependencies.
import Vue from 'vue';

// Components.
import Main from './components/main.vue';
import Events from './helpers/events.js';
import Store from './helpers/store.js';
import Seeder from './helpers/seeder.js';

// Create Vue instance.
const vueInstance = new Vue({
  template: '<segel-main v-bind:start="start" v-bind:end="end" v-bind:objects="objects" v-bind:bookings="bookings"></segel-main>',

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

  data: Store.state
});

// Include test data if development build.
if (process.env.NODE_ENV === 'development') {
  Seeder.seed();
}

// Republish events.
Events.$on('bookings:add', function (data) {
  vueInstance.$emit('bookings:add', data);
  Store.addBooking(data);
});

Events.$on('bookings:update', function (data) {
  vueInstance.$emit('bookings:update', data);
  Store.updateBooking(data);
});

// Declare function to export.
const Segel = function (selector) {
  vueInstance.$mount(selector);
};

Segel.bookings = {
  add: function (data) {
    Store.addBooking(data);
    return this;
  },
  update: function (data) {
    Store.updateBooking(data);
    return this;
  },
  remove: function (data) {
    Store.removeBooking(data);
    return this;
  }
};

Segel.objects = {
  add: function (data) {
    Store.addObject(data);
    return this;
  },
  update: function (data) {
    Store.updateObject(data);
    return this;
  },
  remove: function (data) {
    Store.removeObject(data);
    return this;
  }
};

Segel.instance = vueInstance;

export default Segel;

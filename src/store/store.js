'use strict';

// Dependencies.
import Vuex from 'vuex';
import Events from '../helpers/events';

// Modules.
import Objects from './modules/objects';
import Bookings from './modules/bookings';

// Create state object.
const Store = new Vuex.Store({
  state: {
    start: Math.floor(new Date().setHours(0, 0, 0, 0) / 1000),
    end: Math.floor(new Date().setHours(24, 0, 0, 0) / 1000),
    duration: 86400,
    steps: 48,
    objects: [],
    bookings: [],
    currentTime: Math.floor(new Date() / 1000)
  },
  mutations: {
    setTime: function (state, timestamps) {
      state.start = timestamps.start;
      state.end = timestamps.end;
      state.duration = timestamps.end - timestamps.start;

      // Emit event that time has changed.
      Events.$emit('time:changed', state.start, state.end);
    },
    setCurrentTime: function (state) {
      state.currentTime = Math.floor(new Date().getTime() / 1000);
    }
  },
  modules: {
    bookings: Bookings,
    objects: Objects
  }
});

// Start timer that ticks every second.
(function timer () {
  Store.commit('setCurrentTime');
  setTimeout(timer, 1000);
})();

// Return the instance.
export default Store;

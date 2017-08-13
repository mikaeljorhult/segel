'use strict';

// Dependencies.
import Vue from 'vue';
import Vuex from 'vuex';
import Cast from '../helpers/cast';
import Events from '../helpers/events';

// Modules.
import SegelConfig from './modules/config';
import SegelBookings from './modules/bookings';
import SegelObjects from './modules/objects';

// Install Vuex if it is not done automatically.
if (window.Vue === undefined) {
  Vue.use(Vuex);
}

// Create state object.
const SegelStore = new Vuex.Store({
  state: {
    start: Cast.date(new Date().setHours(0, 0, 0, 0)),
    end: Cast.date(new Date().setHours(24, 0, 0, 0)),
    steps: 48,
    currentTime: Cast.date(new Date())
  },

  getters: {
    duration: function (state) {
      return state.end - state.start;
    }
  },

  mutations: {
    setTime: function (state, timestamps) {
      state.start = timestamps.start;
      state.end = timestamps.end;

      // Emit event that time has changed.
      Events.$emit('time:changed', state.start, state.end);
    },
    setCurrentTime: function (state) {
      state.currentTime = Cast.date(new Date());
    }
  },

  modules: {
    config: SegelConfig,
    bookings: SegelBookings,
    objects: SegelObjects
  }
});

// Start timer that ticks every second.
(function timer () {
  SegelStore.commit('setCurrentTime');
  setTimeout(timer, 1000);
})();

// Return the instance.
export default SegelStore;

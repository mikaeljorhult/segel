'use strict';

// Dependencies.
import Vue from 'vue';
import Vuex from 'vuex';
import Cast from '../helpers/cast';
import Events from '../helpers/events';

// Modules.
import SegelConfig from './modules/config';
import SegelBookings from './modules/bookings';
import SegelResources from './modules/resources';
import SegelUser from './modules/user';

// Install Vuex if it is not done automatically.
if (window.Vue === undefined) {
  Vue.use(Vuex);
}

// Create state object.
const SegelStore = new Vuex.Store({
  state: {
    start: Cast.date(new Date().setHours(0, 0, 0, 0)),
    end: Cast.date(new Date().setHours(24, 0, 0, 0)),
    steps: 48
  },

  getters: {
    duration: function (state) {
      return state.end - state.start;
    }
  },

  mutations: {
    setTime: function (state, timestamps) {
      state.start = Cast.date(timestamps.start);
      state.end = Cast.date(timestamps.end);

      // Emit event that time has changed.
      Events.$emit('time:changed', state.start, state.end);
    }
  },

  modules: {
    config: SegelConfig,
    bookings: SegelBookings,
    resources: SegelResources,
    user: SegelUser
  }
});

// Return the instance.
export default SegelStore;

'use strict';

// Dependencies.
import Vue from 'vue';
import Vuex from 'vuex';
// Modules.
import SegelBookings from './modules/bookings';
import SegelResources from './modules/resources';

// Install Vuex if it is not done automatically.
if (window.Vue === undefined) {
  Vue.use(Vuex);
}

// Create state object.
const SegelStore = new Vuex.Store({
  modules: {
    bookings: SegelBookings,
    resources: SegelResources
  }
});

// Return the instance.
export default SegelStore;

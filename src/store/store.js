'use strict';

// Dependencies.
import Vue from 'vue';
import Vuex from 'vuex';

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
  modules: {
    config: SegelConfig,
    bookings: SegelBookings,
    resources: SegelResources,
    user: SegelUser
  }
});

// Return the instance.
export default SegelStore;

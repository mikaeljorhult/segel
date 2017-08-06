'use strict';

// Dependencies.
import Vuex from 'vuex';
import Events from '../helpers/events';
import Validation from '../helpers/validation';

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
    addBooking: function (state, data) {
      if (!Validation.multipleRules(['isAvailable', 'isUnique'], state.bookings, data)) { return; }

      // Assign temporary ID to booking.
      // TODO: Get the actual ID from user.
      data.id = data.id || (Math.random() + 1).toString(36);

      // Add booking to storage.
      state.bookings.push(data);
    },
    updateBooking: function (state, data) {
      // Check availability off requested object.
      if (!Validation.isAvailable(state.bookings, data)) { return; }

      // Retrieve the index of the stored copy of booking.
      let index = state.bookings.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        state.bookings.splice(index, 1, data);
      }
    },
    removeBooking: function (state, data) {
      // Retrieve the index of the stored copy of booking.
      let index = state.bookings.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        state.bookings.splice(index, 1);
      }
    },
    addObject: function (state, data) {
      // Check that object with index don't already exist.
      if (!Validation.isUnique(state.objects, data)) { return; }

      // Add object to storage.
      state.objects.push(data);
    },
    updateObject: function (state, data) {
      // Retrieve the index of the stored copy of object.
      let index = state.objects.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace object with new data.
      if (index !== -1) {
        state.objects.splice(index, 1, data);
      }
    },
    removeObject: function (state, data) {
      // Retrieve the index of the stored copy of object.
      let index = state.objects.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace object with new data.
      if (index !== -1) {
        state.objects.splice(index, 1);
      }
    },
    setCurrentTime: function (state) {
      state.currentTime = Math.floor(new Date().getTime() / 1000);
    }
  }
});

// Start timer that ticks every second.
/* (function timer () {
  Store.setCurrentTime();
  setTimeout(timer, 1000);
})(); */

// Return the instance.
export default Store;

'use strict';

// Dependencies.
import Events from '../../helpers/events';
import Validation from '../../helpers/validation';

/**
 * Module for bookings.
 *
 * @type {Object}
 */
const Bookings = {
  namespaced: true,

  state: {
    all: []
  },

  getters: {
    all: function (state) {
      return state.all;
    },
    get: function (state) {
      return function (id) {
        return state.all.find(function (booking) {
          return booking.id === id;
        });
      };
    }
  },

  mutations: {
    add: function (state, data) {
      if (!Validation.multipleRules(['isAvailable', 'isUnique'], state.all, data)) { return; }

      // Assign temporary ID to booking.
      // TODO: Get the actual ID from user.
      data.id = data.id || (Math.random() + 1).toString(36);

      // Add booking to storage.
      state.all.push(data);

      // Emit event with the added booking.
      Events.$emit('bookings:added', data);
    },
    update: function (state, data) {
      // Check availability off requested object.
      if (!Validation.isAvailable(state.all, data)) { return; }

      // Retrieve the index of the stored copy of booking.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        state.all.splice(index, 1, data);

        // Emit event with the updated booking.
        Events.$emit('bookings:updated', data);
      }
    },
    remove: function (state, data) {
      // Retrieve the index of the stored copy of booking.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace booking with new data.
      if (index !== -1) {
        state.all.splice(index, 1);

        // Emit event with the removed booking.
        Events.$emit('bookings:removed', data);
      }
    }
  }
};

export default Bookings;

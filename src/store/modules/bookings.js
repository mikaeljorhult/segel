'use strict';

// Dependencies.
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

  mutations: {
    add: function (state, data) {
      if (!Validation.multipleRules(['isAvailable', 'isUnique'], state.all, data)) { return; }

      // Assign temporary ID to booking.
      // TODO: Get the actual ID from user.
      data.id = data.id || (Math.random() + 1).toString(36);

      // Add booking to storage.
      state.all.push(data);
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
      }
    }
  }
};

export default Bookings;

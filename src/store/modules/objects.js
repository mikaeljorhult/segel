'use strict';

// Dependencies.
import Validation from '../../helpers/validation';

/**
 * Module for objects.
 *
 * @type {Object}
 */
const Objects = {
  namespaced: true,

  state: {
    all: []
  },

  mutations: {
    add: function (state, data) {
      // Check that object with index don't already exist.
      if (!Validation.isUnique(state.all, data)) { return; }

      // Add object to storage.
      state.all.push(data);
    },
    update: function (state, data) {
      // Retrieve the index of the stored copy of object.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace object with new data.
      if (index !== -1) {
        state.all.splice(index, 1, data);
      }
    },
    remove: function (state, data) {
      // Retrieve the index of the stored copy of object.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace object with new data.
      if (index !== -1) {
        state.all.splice(index, 1);
      }
    }
  }
};

export default Objects;

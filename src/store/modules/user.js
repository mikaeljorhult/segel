'use strict';

// Dependencies.
import forOwn from 'lodash/forOwn';

/**
 * Module for user.
 *
 * @type {Object}
 */
const User = {
  namespaced: true,

  state: {
    id: null,
    admin: false
  },

  getters: {
    authenticated: function (state) {
      return state.id !== null;
    },
    id: function (state) {
      return state.id;
    },
    isAdmin: function (state) {
      return state.admin;
    }
  },

  mutations: {
    set: function (state, user) {
      // Iterate over all supplied properties.
      forOwn(user, function (value, key) {
        // Set value if key is available in state.
        if (state[key] !== undefined) {
          state[key] = value;
        }
      });
    }
  }
};

export default User;

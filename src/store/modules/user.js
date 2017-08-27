'use strict';

/**
 * Module for user.
 *
 * @type {Object}
 */
const User = {
  namespaced: true,

  state: {
    id: null,
    isAdmin: false
  },

  getters: {
    authenticated: function (state) {
      return state.id !== null;
    }
  },

  mutations: {}
};

export default User;

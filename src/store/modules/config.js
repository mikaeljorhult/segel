'use strict';

// Dependencies.
import forOwn from 'lodash/forOwn';

/**
 * Module for configuration.
 *
 * @type {Object}
 */
const Config = {
  namespaced: true,

  state: {
    editable: true
  },

  getters: {
    editable: function (state) {
      return state.editable;
    }
  },

  mutations: {
    set: function (state, config) {
      // Iterate over all supplied properties.
      forOwn(config, function (value, key) {
        // Set value if key is available in state.
        if (state[key] !== undefined) {
          state[key] = value;
        }
      });
    }
  }
};

export default Config;

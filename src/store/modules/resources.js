'use strict';

// Dependencies.
import nanoid from 'nanoid';
import Events from '../../helpers/events';
import Validation from '../../helpers/validation';

/**
 * Module for resources.
 *
 * @type {Object}
 */
const Resources = {
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
        return state.all.find(function (resource) {
          return resource.id === id;
        });
      };
    }
  },

  mutations: {
    add: function (state, data) {
      // Check that resource with index don't already exist.
      if (!Validation.isUnique(state.all, data)) { return; }

      // Add resource to storage.
      state.all.push(data);

      // Emit event with the added resource.
      Events.$emit('resources:added', data);
    },
    update: function (state, data) {
      // Retrieve the index of the stored copy of resource.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace resource with new data.
      if (index !== -1) {
        state.all.splice(index, 1, data);

        // Emit event with the updated resource.
        Events.$emit('resources:updated', data);
      }
    },
    remove: function (state, data) {
      // Retrieve the index of the stored copy of resource.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace resource with new data.
      if (index !== -1) {
        state.all.splice(index, 1);

        // Emit event with the removed resource.
        Events.$emit('resources:removed', data);
      }
    }
  },

  actions: {
    create: function (context, data) {
      // Assign temporary ID to resource.
      // TODO: Get the actual ID from user.
      data.id = data.id || nanoid();

      // TODO: Allow hooking in to do server side requests.
      context.commit('add', data);

      // Emit event with the updated resource.
      Events.$emit('resources:created', data);
    }
  }
};

export default Resources;

'use strict';

// Dependencies.
import nanoid from 'nanoid';
import Events from '../../helpers/events';
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

  getters: {
    all: function (state) {
      return state.all;
    },
    get: function (state) {
      return function (id) {
        return state.all.find(function (object) {
          return object.id === id;
        });
      };
    }
  },

  mutations: {
    add: function (state, data) {
      // Check that object with index don't already exist.
      if (!Validation.isUnique(state.all, data)) { return; }

      // Add object to storage.
      state.all.push(data);

      // Emit event with the added object.
      Events.$emit('objects:added', data);
    },
    update: function (state, data) {
      // Retrieve the index of the stored copy of object.
      let index = state.all.findIndex(function (element) {
        return element.id === data.id;
      });

      // Replace object with new data.
      if (index !== -1) {
        state.all.splice(index, 1, data);

        // Emit event with the updated object.
        Events.$emit('objects:updated', data);
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

        // Emit event with the removed object.
        Events.$emit('objects:removed', data);
      }
    }
  },

  actions: {
    create: function (context, data) {
      // Assign temporary ID to object.
      // TODO: Get the actual ID from user.
      data.id = data.id || nanoid();

      // TODO: Allow hooking in to do server side requests.
      context.commit('add', data);

      // Emit event with the updated object.
      Events.$emit('objects:created', data);
    }
  }
};

export default Objects;

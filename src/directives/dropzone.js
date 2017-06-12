'use strict';

// Dependencies.
import interact from 'interact.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).dropzone({
      ondragenter: function (event) {
        element.classList.add('droppable');
      },
      ondragleave: function (event) {
        element.classList.remove('droppable');
      },
      ondrop: function (event) {
        element.classList.remove('droppable');
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

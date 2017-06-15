'use strict';

// Dependencies.
import interact from 'interact.js';
import Events from '../helpers/events.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).dropzone({
      ondragenter: function () {
        element.classList.add('droppable');
      },
      ondragleave: function () {
        element.classList.remove('droppable');
      },
      ondrop: function (event) {
        // Convert moved pixels to change in timestamp.
        var change = Math.round(event.dragEvent.dx / vnode.context.$root.$el.clientWidth * vnode.context.$root.duration);

        // Publish change event with values for booking.
        Events.$emit('change', {
          id: event.relatedTarget.__vue__.id,
          object: vnode.context.id,
          start: event.relatedTarget.__vue__.start + change,
          end: event.relatedTarget.__vue__.end + change
        });

        element.classList.remove('droppable');
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

'use strict';

// Dependencies.
import interact from 'interact.js';
import Events from '../helpers/events.js';
import Grid from '../helpers/grid.js';

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

        // Create copy if ALT key is pressed, otherwise edit existing.
        if (event.dragEvent.altKey) {
          // Add new booking.
          Events.$emit('add', {
            object: vnode.context.id,
            start: event.relatedTarget.__vue__.start + change,
            end: event.relatedTarget.__vue__.end + change
          });
        } else {
          // Change existing booking.
          Events.$emit('change', {
            id: event.relatedTarget.__vue__.id,
            object: vnode.context.id,
            start: event.relatedTarget.__vue__.start + change,
            end: event.relatedTarget.__vue__.end + change
          });
        }

        element.classList.remove('droppable');
      }
    }).on('doubletap', function (event) {
      var position = Math.round(event.offsetX / vnode.context.$root.$el.clientWidth * vnode.context.$root.duration);
      var stepSize = vnode.context.$root.duration / vnode.context.$root.steps;
      var start = Grid.round(position + vnode.context.$root.start, vnode.context.$root.duration, vnode.context.$root.steps);

      // Publish change event with values for created booking.
      Events.$emit('add', {
        object: vnode.context.id,
        start: start,
        end: start + stepSize * 2
      });
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

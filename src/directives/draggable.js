'use strict';

// Dependencies.
import interact from 'interact.js';
import grid from '../helpers/grid';

export default {
  bind: function (element, binding, vnode) {
    interact(element).draggable({
      snap: {
        targets: grid.create(
          vnode.context.$root.$el.clientWidth,
          35,
          vnode.context.$root.steps
        )
      },
      restrict: {
        restriction: '.objects'
      },
      onmove: function (event) {
        // Get previous position from object data.
        var x = (vnode.context.dragX || 0) + event.dx;
        var y = (vnode.context.dragY || 0) + event.dy;

        // Translate the element.
        element.style.webkitTransform =
          element.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // Update the position.
        vnode.context.dragX = parseFloat(x);
        vnode.context.dragY = parseFloat(y);
      },
      onend: function (event) {
        // Reset booking styles.
        element.webkitTransform = element.style.transform = '';
        element.style.height = '';
        vnode.context.dragX = 0;
        vnode.context.dragY = 0;
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

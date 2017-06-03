'use strict';

// Dependencies.
import interact from 'interact.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).draggable({
      onmove: function (event) {
        var element = event.target;

        // Get previous position from object data.
        var x = (parseFloat(vnode.context.dragX) || 0) + event.dx;
        var y = (parseFloat(vnode.context.dragY) || 0) + event.dy;

        // Translate the element.
        element.style.webkitTransform =
          element.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // Update the position.
        vnode.context.dragX = x;
        vnode.context.dragY = y;
      },
      onend: function (event) {
        var element = event.target;

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

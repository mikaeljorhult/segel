'use strict';

// Dependencies.
import interact from 'interact.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).resizable({
      edges: {
        top: false,
        bottom: false,
        left: true,
        right: true,
      },
      onmove: function (event) {
        var target = event.target;

        // Get previous position from object data.
        var x = (parseFloat(vnode.context.resizeX) || 0);
        var y = (parseFloat(vnode.context.resizeY) || 0);

        // Update the element style.
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // Translate when resizing from top or left edges.
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        // Translate the element.
        target.style.webkitTransform =
          target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        // Update the position.
        vnode.context.resizeX = x;
        vnode.context.resizeY = y;
      },
      onend: function (event) {
        var element = event.target;

        // Reset booking styles.
        element.webkitTransform = element.style.transform = '';
        element.style.height = '';
        vnode.context.resizeX = 0;
        vnode.context.resizeY = 0;
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

'use strict';

// Dependencies.
import interact from 'interact.js';
import grid from '../helpers/grid';

export default {
  bind: function (element, binding, vnode) {
    interact(element).resizable({
      snap: {
        targets: grid.create(
          vnode.context.$root.$el.clientWidth,
          35,
          vnode.context.$root.steps
        ),
        offset: 'startCoords'
      },
      edges: {
        top: false,
        bottom: false,
        left: true,
        right: true
      },
      onmove: function (event) {
        // Get previous position from object data.
        var x = vnode.context.resizeX || 0;
        var y = vnode.context.resizeY || 0;

        // Update the element style.
        element.style.width = event.rect.width + 'px';
        element.style.height = event.rect.height + 'px';

        // Translate when resizing from top or left edges.
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        // Translate the element.
        element.style.webkitTransform =
          element.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        // Update the position.
        vnode.context.resizeX = parseFloat(x);
        vnode.context.resizeY = parseFloat(y);
      },
      onend: function (event) {
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

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
        right: true
      },
      onmove: function (event) {
        // Get previous position from object data.
        var x = vnode.context.resizeX || 0;
        var y = vnode.context.resizeY || 0;

        // Update the element style.
        vnode.context.$el.style.width = event.rect.width + 'px';
        vnode.context.$el.style.height = event.rect.height + 'px';

        // Translate when resizing from top or left edges.
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        // Translate the element.
        vnode.context.$el.style.webkitTransform =
          vnode.context.$el.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        // Update the position.
        vnode.context.resizeX = parseFloat(x);
        vnode.context.resizeY = parseFloat(y);
      },
      onend: function (event) {
        // Reset booking styles.
        vnode.context.$el.webkitTransform = vnode.context.$el.style.transform = '';
        vnode.context.$el.style.height = '';
        vnode.context.resizeX = 0;
        vnode.context.resizeY = 0;
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

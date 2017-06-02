'use strict';

// Dependencies.
import interact from 'interact.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).draggable({
      onmove: function (event) {
        var element = event.target;

        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(element.getAttribute('data-x')) || 0) + event.dx;
        var y = (parseFloat(element.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        element.style.webkitTransform =
          element.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the position attributes
        element.setAttribute('data-x', x);
        element.setAttribute('data-y', y);
      },
      onend: function (event) {
        var element = event.target;

        // Reset booking styles.
        element.webkitTransform = element.style.transform = '';
        element.style.height = '';
        element.setAttribute('data-x', 0);
        element.setAttribute('data-y', 0);
      }
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};

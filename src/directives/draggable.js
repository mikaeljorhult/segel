'use strict';

// Dependencies.
import interact from 'interact.js';
import debounce from 'lodash/debounce';
import Grid from '../helpers/grid';

const handleResize = function (element, vnode) {
  // Set new grid based on current widths.
  interact(element).draggable().snap.targets = Grid.create(
    vnode.context.$root.$el.clientWidth,
    35,
    vnode.context.$root.steps
  );
};

export default {
  bind: function (element, binding, vnode) {
    window.addEventListener('resize', debounce(handleResize.bind(null, element, vnode), 150));

    interact(element).draggable({
      snap: {
        targets: Grid.create(
          vnode.context.$root.$el.clientWidth,
          35,
          vnode.context.$root.steps
        ),
        offset: 'startCoords'
      },
      restrict: {
        restriction: '.segel-objects'
      },
      onstart: function () {
        element.classList.add('dragging');
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
      onend: function () {
        // Reset booking styles.
        element.classList.remove('dragging');
        element.webkitTransform = element.style.transform = '';
        element.style.height = '';
        vnode.context.dragX = 0;
        vnode.context.dragY = 0;
      }
    });
  },
  unbind: function (element, context, vnode) {
    window.removeEventListener('resize', debounce(handleResize.bind(null, element, vnode), 150));
    interact(element).unset();
  }
};

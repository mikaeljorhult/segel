'use strict';

// Dependencies.
import interact from 'interact.js';
import debounce from 'lodash/debounce';
import Grid from '../helpers/grid';

const handleResize = function (element, vnode) {
  // Set new grid based on current widths.
  interact(element).resizable().snap.targets = Grid.create(
    vnode.context.$root.$el.clientWidth,
    35,
    vnode.context.$store.state.steps
  );
};

export default {
  bind: function (element, binding, vnode) {
    window.addEventListener('resize', debounce(handleResize.bind(null, element, vnode), 150));

    interact(element).resizable({
      enabled: binding.value === undefined ? true : binding.value,
      snap: {
        targets: Grid.create(
          vnode.context.$root.$el.clientWidth,
          35,
          vnode.context.$store.state.steps
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
      onend: function () {
        var start = Math.round((element.offsetLeft + vnode.context.resizeX) / vnode.context.$root.$el.clientWidth * vnode.context.$store.getters['duration']);
        var end = Math.round(element.getBoundingClientRect().width / vnode.context.$root.$el.clientWidth * vnode.context.$store.getters['duration']);

        // Commit changes to store.
        vnode.context.$store.commit('bookings/update', {
          id: vnode.context.id,
          object: vnode.context.object,
          start: Grid.round(vnode.context.$store.state.start + start, vnode.context.$store.getters['duration'], vnode.context.$store.state.steps),
          end: Grid.round(vnode.context.$store.state.start + start + end, vnode.context.$store.getters['duration'], vnode.context.$store.state.steps)
        });

        // Reset booking styles.
        element.webkitTransform = element.style.transform = '';
        element.style.width = vnode.context.width + '%';
        element.style.height = '';
        vnode.context.resizeX = 0;
        vnode.context.resizeY = 0;
      }
    });
  },
  unbind: function (element, binding, vnode) {
    window.removeEventListener('resize', debounce(handleResize.bind(null, element, vnode), 150));
    interact(element).unset();
  },
  update: function (element, binding) {
    // Only set status of resizable if it has changed.
    if (binding.value !== binding.oldValue) {
      // Enable/disable depending on passed in boolean. Always true if nothing was passed.
      interact(element).resizable().enabled = binding.value === undefined ? true : binding.value;
    }
  }
};

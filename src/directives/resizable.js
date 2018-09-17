"use strict";

// Dependencies.
import interact from "interactjs";
import debounce from "lodash/debounce";
import Grid from "../helpers/grid";
import Store from "../store";

const handleResize = function(element, vnode) {
  // Set new grid based on current widths.
  interact(element).resizable().snap.targets = Grid.create(
    vnode.context.$root.$el.clientWidth,
    35,
    vnode.context.state.time.steps
  );
};

export default {
  bind: function(element, binding, vnode) {
    window.addEventListener(
      "resize",
      debounce(handleResize.bind(null, element, vnode), 150)
    );

    interact(element).resizable({
      enabled: binding.value === undefined ? true : binding.value,
      snap: {
        targets: Grid.create(
          vnode.context.$root.$el.clientWidth,
          35,
          vnode.context.state.time.steps
        ),
        offset: "startCoords"
      },
      edges: {
        top: false,
        bottom: false,
        left: true,
        right: true
      },
      onmove: function(event) {
        // Get previous position from resource data.
        var x = vnode.context.resizeX || 0;
        var y = vnode.context.resizeY || 0;

        // Update the element style.
        element.style.width = event.rect.width + "px";
        element.style.height = event.rect.height + "px";

        // Translate when resizing from top or left edges.
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        // Translate the element.
        element.style.webkitTransform = element.style.transform =
          "translate(" + x + "px," + y + "px)";

        // Update the position.
        vnode.context.resizeX = parseFloat(x);
        vnode.context.resizeY = parseFloat(y);
      },
      onend: function() {
        var start = Math.round(
          ((element.offsetLeft + vnode.context.resizeX) /
            vnode.context.$root.$el.clientWidth) *
            vnode.context.state.time.duration()
        );
        var end = Math.round(
          (element.getBoundingClientRect().width /
            vnode.context.$root.$el.clientWidth) *
            vnode.context.state.time.duration()
        );

        // Commit changes to store.
        Store.bookings.update({
          id: vnode.context.id,
          resource: vnode.context.resource,
          start: Grid.round(
            vnode.context.state.time.start + start,
            vnode.context.state.time.duration(),
            vnode.context.state.time.steps
          ),
          end: Grid.round(
            vnode.context.state.time.start + start + end,
            vnode.context.state.time.duration(),
            vnode.context.state.time.steps
          )
        });

        // Reset booking styles.
        element.webkitTransform = element.style.transform = "";
        element.style.width = vnode.context.width + "%";
        element.style.height = "";
        vnode.context.resizeX = 0;
        vnode.context.resizeY = 0;
      }
    });
  },
  unbind: function(element, binding, vnode) {
    window.removeEventListener(
      "resize",
      debounce(handleResize.bind(null, element, vnode), 150)
    );
    interact(element).unset();
  },
  update: function(element, binding) {
    // Only set status of resizable if it has changed.
    if (binding.value !== binding.oldValue) {
      // Enable/disable depending on passed in boolean. Always true if nothing was passed.
      interact(element).resizable().enabled =
        binding.value === undefined ? true : binding.value;
    }
  }
};

// Dependencies.
import interact from "interactjs";
import debounce from "lodash/debounce";
import Grid from "../helpers/grid";

const handleResize = function(element, vnode) {
  // Set new grid based on current widths.
  // TODO: Calculate height.
  interact(element).draggable().snap.targets = Grid.create(
    vnode.context.$root.$el.clientWidth,
    36,
    vnode.context.state.config.steps
  );
};

export default {
  bind: function(element, binding, vnode) {
    window.addEventListener(
      "resize",
      debounce(handleResize.bind(null, element, vnode), 150)
    );

    interact(element).draggable({
      enabled: binding.value === undefined ? true : binding.value,
      snap: {
        targets: Grid.create(
          vnode.context.$root.$el.clientWidth,
          36,
          vnode.context.state.config.steps
        ),
        offset: "startCoords"
      },
      restrict: {
        restriction: ".segel-resources"
      },
      onstart: function() {
        element.classList.add("dragging");
      },
      onmove: function(event) {
        // Get previous position from resource data.
        var x = (vnode.context.dragX || 0) + event.dx;
        var y = (vnode.context.dragY || 0) + event.dy;

        // Translate the element.
        element.style.webkitTransform = element.style.transform =
          "translate(" + x + "px, " + y + "px)";

        // Update the position.
        vnode.context.dragX = parseFloat(x);
        vnode.context.dragY = parseFloat(y);
      },
      onend: function() {
        // Reset booking styles.
        element.classList.remove("dragging");
        element.webkitTransform = element.style.transform = "";
        element.style.height = "";
        vnode.context.dragX = 0;
        vnode.context.dragY = 0;
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
    // Only set status of draggable if it has changed.
    if (binding.value !== binding.oldValue) {
      // Enable/disable depending on passed in boolean. Always true if nothing was passed.
      interact(element).draggable().enabled =
        binding.value === undefined ? true : binding.value;
    }
  }
};

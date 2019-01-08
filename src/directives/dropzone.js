// Dependencies.
import interact from "interactjs";
import Cast from "../helpers/cast";
import Events from "../helpers/events";
import Grid from "../helpers/grid";

export default {
  bind: function(element, binding, vnode) {
    interact(element)
      .dropzone({
        ondragenter: function() {
          element.classList.add("droppable");
        },
        ondragleave: function() {
          element.classList.remove("droppable");
        },
        ondrop: function(event) {
          // Convert moved pixels to change in timestamp.
          let change = Math.round(
            (event.dragEvent.dx / vnode.context.$root.$el.clientWidth) *
              vnode.context.state.time.duration()
          );

          // Build object.
          let booking = {
            resource: vnode.context.id,
            start: Cast.date(event.relatedTarget.__vue__.start + change),
            end: Cast.date(event.relatedTarget.__vue__.end + change)
          };

          // Create copy if ALT key is pressed, otherwise edit existing.
          if (event.dragEvent.altKey) {
            // Emit event to create booking.
            Events.$emit("bookings-create", booking);
          } else {
            // Append ID of moved booking.
            booking.id = event.relatedTarget.__vue__.id;

            // Emit event to update booking.
            Events.$emit("bookings-update", booking);
          }

          element.classList.remove("droppable");
        }
      })
      .on("doubletap", function(event) {
        // Only listen to clicks directly on the resource, not bookings.
        if (event.target !== element) {
          event.stopPropagation();
          return;
        }

        let position = Math.round(
          (event.offsetX / vnode.context.$root.$el.clientWidth) *
            vnode.context.state.time.duration()
        );
        let stepSize =
          vnode.context.state.time.duration() /
          vnode.context.state.config.steps;
        let start = Grid.round(
          position + vnode.context.state.time.start,
          vnode.context.state.time.duration(),
          vnode.context.state.config.steps
        );

        // Emit event to create booking.
        Events.$emit("bookings-create", {
          resource: vnode.context.id,
          start: start,
          end: start + stepSize * 2
        });
      });
  },
  unbind: function(element) {
    interact(element).unset();
  }
};

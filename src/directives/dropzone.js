// Dependencies.
import interact from "interactjs";
import Cast from "../helpers/cast";
import Events from "../helpers/events";

export default {
  bind: function(element, binding, vnode) {
    interact(element).dropzone({
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
          start: Cast.date(
            parseInt(event.relatedTarget.__vue__.start) + change
          ),
          end: Cast.date(parseInt(event.relatedTarget.__vue__.end) + change)
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
    });
  },
  unbind: function(element) {
    interact(element).unset();
  }
};

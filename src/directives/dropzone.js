"use strict";

// Dependencies.
import interact from "interactjs";
import Grid from "../helpers/grid.js";

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

          // Create copy if ALT key is pressed, otherwise edit existing.
          if (event.dragEvent.altKey) {
            // TODO: Replace call to Store with event.
            // Add new booking to store.
            /*Store.bookings.create({
              resource: vnode.context.id,
              start: event.relatedTarget.__vue__.start + change,
              end: event.relatedTarget.__vue__.end + change
            });*/
          } else {
            // TODO: Replace call to Store with event.
            // Commit changes of existing booking to store.
            /*Store.bookings.update({
              id: event.relatedTarget.__vue__.id,
              resource: vnode.context.id,
              start: event.relatedTarget.__vue__.start + change,
              end: event.relatedTarget.__vue__.end + change
            });*/
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

        // TODO: Replace call to Store with event.
        // Add new booking to store.
        /*Store.bookings.create({
          resource: vnode.context.id,
          start: start,
          end: start + stepSize * 2
        });*/
      });
  },
  unbind: function(element) {
    interact(element).unset();
  }
};

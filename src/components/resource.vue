<template>
  <li class="segel-resource">
    {{ name }}

    <ul class="segel-bookings" v-on:dblclick="handleDblclick">
      <segel-booking
        v-for="booking in bookings"
        v-bind:key="booking.id"
        v-bind:id="booking.id"
        v-bind:resource="id"
        v-bind:status="booking.status"
        v-bind:start="booking.start"
        v-bind:end="booking.end"
      ></segel-booking>
    </ul>
  </li>
</template>

<script>
import interact from "interactjs";
import SegelBooking from "./booking.vue";
import Cast from "../helpers/cast";
import Events from "../helpers/events";
import Grid from "../helpers/grid";

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  data: function() {
    return {
      dropTarget: false
    };
  },

  inject: ["state"],

  components: {
    "segel-booking": SegelBooking
  },

  methods: {
    handleDblclick: function(event) {
      // Disregard all clicks when Segel is not editable or if event originates another this.$el.
      if (
        !this.state.config.editable ||
        event.target.className !== "segel-bookings"
      ) {
        return;
      }

      let position = Math.round(
        (event.offsetX / this.$root.$el.clientWidth) *
          this.state.time.duration()
      );
      let stepSize = this.state.time.duration() / this.state.config.steps;
      let start = Grid.round(
        position + this.state.time.start,
        this.state.time.duration(),
        this.state.config.steps
      );

      // Emit event to create booking.
      Events.$emit("bookings-create", {
        resource: this.id,
        start: start,
        end: start + stepSize * 2
      });
    }
  },
  mounted: function() {
    // Wait until all components have been mounted.
    this.$nextTick(function() {
      interact(this.$el).dropzone({
        ondragenter: () => {
          this.$el.classList.add("droppable");
        },
        ondragleave: () => {
          this.$el.classList.remove("droppable");
        },
        ondrop: event => {
          // Convert moved pixels to change in timestamp.
          let change = Math.round(
            (event.dragEvent.dx / this.$root.$el.clientWidth) *
              this.state.time.duration()
          );

          // Build object.
          let booking = {
            resource: this.id,
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

          this.$el.classList.remove("droppable");
        }
      });
    });
  },
  beforeDestroy: function() {
    // Destroy interact instance on component this.$el.
    interact(this.$el).unset();
  }
};
</script>

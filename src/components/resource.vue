<template>
  <li class="segel-resource">
    {{ name }}

    <ul class="segel-bookings" v-dropzone v-on:dblclick="handleDblclick">
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
import SegelBooking from "./booking.vue";
import Dropzone from "../directives/dropzone.js";
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

  directives: {
    dropzone: Dropzone
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
      // Disregard all clicks when Segel is not editable or if event originates another element.
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
  }
};
</script>

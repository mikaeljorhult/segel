<template>
  <li
    v-if="isInView"
    v-draggable="isEditable"
    v-resizable="isEditable"
    v-bind:class="{ 'segel-booking': true, editable: isEditable }"
    v-bind:style="{ left: left + '%', width: width + '%' }"
  ></li>
</template>

<script>
import inRange from "lodash/inRange";
import Draggable from "../directives/draggable.js";
import Resizable from "../directives/resizable.js";

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    resource: {
      type: [String, Number],
      required: true
    },
    user: {
      type: [String, Number]
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    }
  },

  directives: {
    draggable: Draggable,
    resizable: Resizable
  },

  data: function() {
    return {};
  },

  inject: ["config", "state", "time"],

  computed: {
    isEditable: function() {
      // Check if bookings should be editable at all.
      if (!this.config.editable) {
        return false;
      }

      // If user is logged in, check that user own the booking or is admin.
      if (
        this.state.user.isAuthenticated() &&
        (this.user !== this.state.user.id && this.state.user.isAdmin() !== true)
      ) {
        return false;
      }

      // Past and current bookings can't be edited.
      return this.start > this.time.current;
    },
    isInView: function() {
      return (
        inRange(this.start, this.time.start, this.time.end) ||
        inRange(this.end, this.time.start, this.time.end) ||
        (this.start < this.time.start && this.end > this.time.start) ||
        (this.end < this.time.end && this.end > this.time.end)
      );
    },
    duration: function() {
      return this.end - this.start;
    },
    left: function() {
      return ((this.start - this.time.start) / this.time.duration()) * 100;
    },
    width: function() {
      return (this.duration / this.time.duration()) * 100;
    }
  }
};
</script>

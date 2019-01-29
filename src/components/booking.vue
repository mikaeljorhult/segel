<template>
  <li
    v-if="isInView"
    v-draggable="isEditable"
    v-resizable="isEditable"
    v-bind:class="{ 'segel-booking': true, editable: isEditable }"
    v-bind:style="{ left: left + '%', width: width + '%' }"
    v-on:dblclick="handleDblclick"
  >
    <span
      v-if="isEditable"
      class="segel-resize-handle segel-resize-handle__left"
      >&#8942;</span
    >
    <span
      v-if="isEditable"
      class="segel-resize-handle segel-resize-handle__right"
      >&#8942;</span
    >

    <div class="progress" v-if="status === 'updating'"></div>
  </li>
</template>

<script>
import inRange from "lodash/inRange";
import Draggable from "../directives/draggable.js";
import Resizable from "../directives/resizable.js";
import Events from "../helpers/events";

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
    status: {
      type: String,
      default: "confirmed"
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

  inject: ["state"],

  computed: {
    isEditable: function() {
      // Check if bookings should be editable at all.
      if (!this.state.config.editable) {
        return false;
      }

      // Check if status isn't updating.
      if (this.status === "updating") {
        return false;
      }

      // Past and current bookings can't be edited.
      return this.start > this.state.time.current;
    },
    isInView: function() {
      return (
        inRange(this.start, this.state.time.start, this.state.time.end) ||
        inRange(this.end, this.state.time.start, this.state.time.end) ||
        (this.start < this.state.time.start &&
          this.end > this.state.time.start) ||
        (this.end < this.state.time.end && this.end > this.state.time.end)
      );
    },
    duration: function() {
      return this.end - this.start;
    },
    left: function() {
      return (
        ((this.start - this.state.time.start) / this.state.time.duration()) *
        100
      );
    },
    width: function() {
      return (this.duration / this.state.time.duration()) * 100;
    }
  },
  methods: {
    handleDblclick: function() {
      // Disregard all clicks when Segel is not editable.
      if (!this.state.config.editable) {
        return;
      }

      // Emit event to delete booking.
      Events.$emit("bookings-delete", {
        id: this.id
      });

      // Reset cursor style.
      window.document.documentElement.setAttribute("style", "");
    }
  }
};
</script>

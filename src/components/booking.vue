<template>
  <li
    v-if="isInView"
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
import debounce from "lodash/debounce";
import interact from "interactjs";
import inRange from "lodash/inRange";
import Resizable from "../directives/resizable.js";
import Events from "../helpers/events";
import Grid from "../helpers/grid";

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
    },
    handleResize: function() {
      // Set new grid based on current widths.
      // TODO: Calculate height.
      interact(this.$el).draggable().snap.targets = Grid.create(
        this.$root.$el.clientWidth,
        36,
        this.state.config.steps
      );
    }
  },
  mounted: function() {
    // Wait until all components have been mounted.
    this.$nextTick(function() {
      let snapGrid = Grid.create(
        this.$root.$el.clientWidth,
        36,
        this.state.config.steps
      );

      // Initialize interact on component element.
      interact(this.$el).draggable({
        enabled: this.editable === undefined ? true : this.editable,
        snap: {
          targets: snapGrid,
          offset: "startCoords"
        },
        restrict: {
          restriction: ".segel-resources"
        },
        onstart: () => {
          this.$el.classList.add("dragging");
        },
        onmove: event => {
          // Get previous position from resource data.
          var x = (this.dragX || 0) + event.dx;
          var y = (this.dragY || 0) + event.dy;

          // Translate the element.
          this.$el.style.webkitTransform = this.$el.style.transform =
            "translate(" + x + "px, " + y + "px)";

          // Update the position.
          this.dragX = parseFloat(x);
          this.dragY = parseFloat(y);
        },
        onend: () => {
          // Reset booking styles.
          this.$el.classList.remove("dragging");
          this.$el.webkitTransform = this.$el.style.transform = "";
          this.$el.style.height = "";
          this.dragX = 0;
          this.dragY = 0;
        }
      });
    });
  },
  beforeDestroy: function() {
    // Remove event listener for resize.
    window.removeEventListener(
      "resize",
      debounce(this.handleResize.bind(), 150)
    );

    // Destroy interact instance on component element.
    interact(this.$el).unset();
  }
};
</script>

<template>
  <li
    v-if="isInView"
    v-bind:class="classAttribute"
    v-bind:style="styleAttribute"
    v-bind:title="title"
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
import interact from "interactjs";
import inRange from "lodash/inRange";
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
    editable: {
      type: Boolean,
      default: true
    },
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: true
    },
    classes: {
      type: Array,
      required: false
    },
    title: {
      type: String,
      required: false,
      default: ""
    }
  },

  data: function() {
    return {
      isInteractDragging: false,
      isInteractResizing: false,
      interactPosition: {
        x: 0,
        y: 0
      },
      interactSize: {
        width: null,
        height: null
      }
    };
  },

  inject: ["config", "grid", "time"],

  watch: {
    isEditable: function(value) {
      // Deactivate interactions when not editable.
      interact(this.$el).draggable().enabled = value;
      interact(this.$el).resizable().enabled = value;
    },
    grid: {
      handler: function() {
        this.handleResize();
      },
      deep: true
    }
  },

  computed: {
    isEditable: function() {
      // Check if bookings should be editable at all.
      if (!this.config.editable) {
        return false;
      }

      // Check if this specific booking is editable.
      if (!this.editable) {
        return false;
      }

      // Check if status isn't updating.
      if (this.status === "updating") {
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
    styleLeft: function() {
      return `${((this.start - this.time.start) / this.time.duration) * 100}%`;
    },
    styleWidth: function() {
      if (this.isInteractResizing) {
        return `${this.interactSize.width}px`;
      } else {
        return `${(this.duration / this.time.duration) * 100}%`;
      }
    },
    styleTransform: function() {
      if (this.isInteractDragging || this.isInteractResizing) {
        const { x, y } = this.interactPosition;
        return `translate(${x}px, ${y}px)`;
      }

      return null;
    },
    classAttribute: function() {
      let classObject = {
        "segel-booking": true,
        editable: this.isEditable,
        dragging: this.isInteractDragging,
        resizing: this.isInteractResizing
      };

      if (Array.isArray(this.classes)) {
        this.classes.forEach(className, function() {
          classObject[className] = true;
        });
      }

      return classObject;
    },
    styleAttribute: function() {
      return {
        left: this.styleLeft,
        width: this.styleWidth,
        transform: this.styleTransform
      };
    }
  },

  methods: {
    handleDblclick: function() {
      // Disregard all clicks when Segel is not editable.
      if (!this.config.editable) {
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
      interact(
        this.$el
      ).draggable().modifiers[0].options.targets = this.grid.snap;
      interact(
        this.$el
      ).resizable().modifiers[0].options.targets = this.grid.snap;
      interact(
        this.$el
      ).resizable().modifiers[1].options.min = this.grid.size.min;
      interact(
        this.$el
      ).resizable().modifiers[1].options.max = this.grid.size.max;
    },

    interactSetPosition: function(coordinates) {
      const { x = 0, y = 0 } = coordinates;
      this.interactPosition = { x, y };
    },

    interactResetPosition: function() {
      this.interactSetPosition({ x: 0, y: 0 });
    },

    interactSetSize: function(sizes) {
      const { width = 0, height = 0 } = sizes;
      this.interactSize = { width, height };
    },

    interactResetSize: function() {
      this.interactSetSize({ width: null, height: null });
    }
  },

  mounted: function() {
    // Wait until all components have been mounted.
    this.$nextTick(function() {
      // Initialize interact on component this.$el.
      interact(this.$el).draggable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [
          interact.modifiers.snap({
            targets: this.grid.snap,
            offset: "startCoords"
          })
        ],
        restrict: {
          restriction: ".segel-resources"
        },
        onstart: () => {
          this.isInteractDragging = true;
        },
        onmove: event => {
          // Get previous position from resource data.
          const x = this.interactPosition.x + event.dx;
          const y = this.interactPosition.y + event.dy;

          // Update the position.
          this.interactSetPosition({ x, y });
        },
        onend: () => {
          // Reset booking styles.
          this.isInteractDragging = false;
        }
      });

      interact(this.$el).resizable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [
          interact.modifiers.snap({
            targets: this.grid.snap,
            offset: "startCoords"
          }),
          interact.modifiers.restrictSize(this.grid.size)
        ],
        edges: {
          top: false,
          bottom: false,
          left: ".segel-resize-handle__left",
          right: ".segel-resize-handle__right"
        },
        onstart: () => {
          this.isInteractResizing = true;
        },
        onmove: event => {
          // Get position and size of element.
          const x = this.interactPosition.x + event.deltaRect.left;
          const y = this.interactPosition.y + event.deltaRect.top;
          const width = event.rect.width;
          const height = event.rect.height;

          // Update the position.
          this.interactSetPosition({ x, y });
          this.interactSetSize({ width, height });
        },
        onend: () => {
          let start = Math.round(
            ((this.$el.offsetLeft + this.interactPosition.x) /
              this.$parent.$el.clientWidth) *
              this.time.duration
          );
          let end = Math.round(
            (this.$el.getBoundingClientRect().width /
              this.$parent.$el.clientWidth) *
              this.time.duration
          );

          // Emit event to update booking.
          Events.$emit("bookings-update", {
            id: this.id,
            resource: this.resource,
            start: Grid.round(
              this.time.start + start,
              this.time.duration,
              this.config.steps
            ),
            end: Grid.round(
              this.time.start + start + end,
              this.time.duration,
              this.config.steps
            ),
            editable: this.editable
          });

          // Reset booking styles.
          this.isInteractResizing = false;
          this.interactResetSize();
          this.interactResetPosition();
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

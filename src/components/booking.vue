<template>
  <li
    v-if="isInView"
    v-bind:class="{
      'segel-booking': true,
      editable: isEditable,
      dragging: isInteractDragging,
      resizing: isInteractResizing
    }"
    v-bind:style="{
      left: styleLeft,
      width: styleWidth,
      transform: styleTransform
    }"
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

  inject: ["state"],

  watch: {
    isEditable: function(value) {
      // Deactivate interactions when not editable.
      interact(this.$el).draggable().enabled = value;
      interact(this.$el).resizable().enabled = value;
    }
  },

  computed: {
    isEditable: function() {
      // Check if bookings should be editable at all.
      if (!this.state.config.editable) {
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
    styleLeft: function() {
      return `${((this.start - this.state.time.start) /
        this.state.time.duration()) *
        100}%`;
    },
    styleWidth: function() {
      if (this.isInteractResizing) {
        return `${this.interactSize.width}px`;
      } else {
        return `${(this.duration / this.state.time.duration()) * 100}%`;
      }
    },
    styleTransform: function() {
      if (this.isInteractDragging || this.isInteractResizing) {
        const { x, y } = this.interactPosition;
        return `translate(${x}px, ${y}px)`;
      }

      return null;
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
      // Calculate new snap grid.
      let snapGrid = Grid.create(
        this.$parent.$el.clientWidth,
        36,
        this.state.config.steps
      );

      // Set new grid based on current widths.
      // TODO: Calculate height.
      interact(this.$el).draggable().snap.targets = snapGrid;
      interact(this.$el).resizable().snap.targets = snapGrid;
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
      let snapGrid = Grid.create(
        this.$parent.$el.clientWidth,
        36,
        this.state.config.steps
      );

      // Initialize interact on component this.$el.
      interact(this.$el).draggable({
        enabled: this.isEditable === undefined ? true : this.isEditable,
        modifiers: [
          interact.modifiers.snap({
            targets: snapGrid,
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
            targets: snapGrid,
            offset: "startCoords"
          }),
          interact.modifiers.restrictSize({
            min: {
              width: this.$parent.$el.clientWidth / this.state.config.steps,
              height: 1
            },
            max: { width: this.$parent.$el.clientWidth, height: 40 }
          })
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
              this.state.time.duration()
          );
          let end = Math.round(
            (this.$el.getBoundingClientRect().width /
              this.$parent.$el.clientWidth) *
              this.state.time.duration()
          );

          // Emit event to update booking.
          Events.$emit("bookings-update", {
            id: this.id,
            resource: this.resource,
            start: Grid.round(
              this.state.time.start + start,
              this.state.time.duration(),
              this.state.config.steps
            ),
            end: Grid.round(
              this.state.time.start + start + end,
              this.state.time.duration(),
              this.state.config.steps
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
    // Remove event listener for resize.
    window.removeEventListener(
      "resize",
      debounce(this.handleResize.bind(), 150)
    );

    // Destroy interact instance on component this.$el.
    interact(this.$el).unset();
  }
};
</script>

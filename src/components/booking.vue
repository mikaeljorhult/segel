<template>
  <li
    v-if="isInView"
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
      // Calculate new snap grid.
      let snapGrid = Grid.create(
        this.$root.$el.clientWidth,
        36,
        this.state.config.steps
      );

      // Set new grid based on current widths.
      // TODO: Calculate height.
      interact(this.$el).draggable().snap.targets = snapGrid;
      interact(this.$el).resizable().snap.targets = snapGrid;
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

      // Initialize interact on component this.$el.
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

          // Translate the this.$el.
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

      interact(this.$el).resizable({
        enabled: this.editable === undefined ? true : this.editable,
        snap: {
          targets: snapGrid,
          offset: "startCoords"
        },
        edges: {
          top: false,
          bottom: false,
          left: ".segel-resize-handle__left",
          right: ".segel-resize-handle__right"
        },
        onstart: () => {
          this.$el.classList.add("resizing");
        },
        onmove: event => {
          // Get previous position from resource data.
          var x = this.resizeX || 0;
          var y = this.resizeY || 0;

          // Update the this.$el style.
          this.$el.style.width = event.rect.width + "px";
          this.$el.style.height = event.rect.height + "px";

          // Translate when resizing from top or left edges.
          x += event.deltaRect.left;
          y += event.deltaRect.top;

          // Translate the this.$el.
          this.$el.style.webkitTransform = this.$el.style.transform =
            "translate(" + x + "px," + y + "px)";

          // Update the position.
          this.resizeX = parseFloat(x);
          this.resizeY = parseFloat(y);
        },
        onend: () => {
          var start = Math.round(
            ((this.$el.offsetLeft + this.resizeX) /
              this.$root.$el.clientWidth) *
              this.state.time.duration()
          );
          var end = Math.round(
            (this.$el.getBoundingClientRect().width /
              this.$root.$el.clientWidth) *
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
            )
          });

          // Reset booking styles.
          this.$el.classList.remove("resizing");
          this.$el.webkitTransform = this.$el.style.transform = "";
          this.$el.style.width = this.width + "%";
          this.$el.style.height = "";
          this.resizeX = 0;
          this.resizeY = 0;
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

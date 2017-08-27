<template>
    <li
        v-if="isInView"
        v-draggable="isEditable"
        v-resizable="isEditable"
        v-bind:class="{'segel-booking': true, editable: isEditable}"
        v-bind:style="{ left: left + '%', width: width + '%' }"
    ></li>
</template>

<script>
  import inRange from 'lodash/inRange';
  import Draggable from '../directives/draggable.js';
  import Resizable from '../directives/resizable.js';

  export default {
    props: {
      id: {
        type: [String, Number],
        required: true
      },
      object: {
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

    data: function () {
      return {};
    },

    computed: {
      isEditable: function () {
        // Check if bookings should be editable at all.
        if (!this.$store.getters['config/editable']) {
          return false;
        }

        // If user is logged in, check that user own the booking or is admin.
        if (this.$store.getters['user/authenticated'] && (this.id !== this.$store.state.start || this.$store.state.isAdmin)) {
          return false;
        }

        // Past and current bookings can't be edited.
        return this.start > this.$store.state.currentTime;
      },
      isInView: function () {
        return inRange(this.start, this.$store.state.start, this.$store.state.end) ||
          inRange(this.end, this.$store.state.start, this.$store.state.end) ||
          (this.start < this.$store.state.start && this.end > this.$store.state.start) ||
          (this.end < this.$store.state.end && this.end > this.$store.state.end);
      },
      duration: function () {
        return this.end - this.start;
      },
      left: function () {
        return (this.start - this.$store.state.start) / this.$store.getters['duration'] * 100;
      },
      width: function () {
        return this.duration / this.$store.getters['duration'] * 100;
      }
    }
  };
</script>

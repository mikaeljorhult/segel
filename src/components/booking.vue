<template>
    <li
        v-draggable="isEditable"
        v-resizable="isEditable"
        v-bind:class="{'segel-booking': true, editable: isEditable}"
        v-bind:style="{ left: left + '%', width: width + '%' }"
    ></li>
</template>

<script>
  import Draggable from '../directives/draggable.js';
  import Resizable from '../directives/resizable.js';

  export default {
    props: [
      'id',
      'object',
      'start',
      'end'
    ],

    directives: {
      draggable: Draggable,
      resizable: Resizable
    },

    data: function () {
      return {};
    },

    computed: {
      isEditable: function () {
        return this.$store.getters['config/editable'] &&
          this.start > this.$store.state.currentTime;
      },
      duration: function () {
        return this.end - this.start;
      },
      left: function () {
        return (this.start - this.$store.state.start) / this.$store.state.duration * 100;
      },
      width: function () {
        return this.duration / this.$store.state.duration * 100;
      }
    }
  };
</script>

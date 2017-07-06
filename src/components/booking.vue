<template>
    <li class="segel-booking"
        v-draggable
        v-resizable
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
      duration: function () {
        return this.end - this.start;
      },
      left: function () {
        return (this.start - this.$root.start) / this.$root.duration * 100;
      },
      width: function () {
        return this.duration / this.$root.duration * 100;
      }
    }
  };
</script>

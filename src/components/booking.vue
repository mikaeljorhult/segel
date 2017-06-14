<template>
    <li class="booking"
        v-draggable
        v-resizable
        v-bind:style="{ left: left + '%', width: width + '%' }"
    ></li>
</template>

<style scoped>
    li {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 100;
        background-color: rgba(255, 0, 0, .25);
    }
</style>

<script>
  import Draggable from '../directives/draggable.js';
  import Resizable from '../directives/resizable.js';

  export default {
    props: [
      'id',
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

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
  import Store from '../helpers/store';

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
        return (this.start - Store.state.start) / Store.state.duration * 100;
      },
      width: function () {
        return this.duration / Store.state.duration * 100;
      }
    }
  };
</script>

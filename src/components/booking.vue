<template>
    <li class="booking"
        v-draggable
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

  export default {
    props: [
      'start',
      'end'
    ],

    directives: {
      draggable: Draggable
    },

    data: function () {
      return {};
    },

    computed: {
      duration: function () {
        return this.end - this.start;
      },
      left: function () {
        return (this.start - this.$root.$data.start) / (this.$root.$data.end - this.$root.$data.start) * 100;
      },
      width: function () {
        return this.duration / (this.$root.$data.end - this.$root.$data.start) * 100;
      }
    }
  };
</script>

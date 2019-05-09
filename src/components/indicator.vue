<template>
  <div
    v-if="isInView"
    v-bind:class="{ 'segel-indicator': true }"
    v-bind:style="{ left: left + '%' }"
  ></div>
</template>

<script>
import inRange from "lodash/inRange";

export default {
  data: function() {
    return {};
  },

  inject: ["time"],

  computed: {
    isInView: function() {
      return inRange(this.time.current, this.time.start, this.time.end);
    },
    left: function() {
      return (
        ((this.time.current - this.time.start) / this.time.duration()) * 100
      );
    }
  }
};
</script>

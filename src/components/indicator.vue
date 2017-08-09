<template>
    <div
        v-if="isInView"
        v-bind:class="{'segel-indicator': true}"
        v-bind:style="{left: left + '%'}"
    ></div>
</template>

<script>
  import inRange from 'lodash/inRange';

  export default {
    data: function () {
      return {};
    },

    computed: {
      isInView: function () {
        return inRange(this.$store.state.currentTime, this.$store.state.start, this.$store.state.end);
      },
      left: function () {
        return (this.$store.state.currentTime - this.$store.state.start) / this.$store.getters['duration'] * 100;
      }
    }
  };
</script>
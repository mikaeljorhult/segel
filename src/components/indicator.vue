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

    inject: ['state'],

    computed: {
      isInView: function () {
        return inRange(this.state.time.current, this.$store.state.start, this.$store.state.end);
      },
      left: function () {
        return (this.state.time.current - this.$store.state.start) / this.$store.getters['duration'] * 100;
      }
    }
  };
</script>
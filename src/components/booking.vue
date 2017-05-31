<template>
    <li v-bind:style="{ left: left + '%', width: width + '%' }"
        v-on:dragstart="dragstart"
        draggable="true"
    ></li>
</template>

<style scoped>
    li {
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: rgba(255, 0, 0, .25);
    }
</style>

<script>
  export default {
    props: [
      'start',
      'end'
    ],

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
    },

    methods: {
      dragstart: function (e) {
        e.dataTransfer.setData('text', this.key);
        e.dataTransfer.effectAllowed = 'copyMove';
      }
    }
  };
</script>

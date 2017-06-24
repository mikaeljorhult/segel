<template>
    <section>
        <a v-on:click="decrease">&laquo;</a>
        <a v-on:click="increase">&raquo;</a>
    </section>
</template>

<style scoped>
    a {
        cursor: pointer;
    }
</style>

<script>
  import Store from '../helpers/store.js';

  export default {
    data: function () {
      return {};
    },

    methods: {
      decrease: function () {
        Store.changeTime(this.$root.duration * -1);
      },

      increase: function () {
        Store.changeTime(this.$root.duration);
      }
    }
  };
</script>

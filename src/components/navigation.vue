<template>
    <section class="segel-navigation">
        <a v-on:click="decrease">&laquo;</a>
        <flat-pickr v-model="date" v-bind:config="config"></flat-pickr>
        <a v-on:click="increase">&raquo;</a>
    </section>
</template>

<script>
  import Store from '../helpers/store.js';
  import flatpickr from 'vue-flatpickr-component';

  export default {
    props: [
      'start'
    ],

    data: function () {
      return {
        config: {
          onChange: this.dateChange
        }
      };
    },

    computed: {
      date: function () {
        return new Date(this.start * 1000).toISOString();
      }
    },

    components: {
      'flat-pickr': flatpickr
    },

    methods: {
      decrease: function () {
        Store.changeTime(this.$root.duration * -1);
      },

      increase: function () {
        Store.changeTime(this.$root.duration);
      },

      dateChange: function (event) {
        let date = event[0];

        Store.setTime(
          date.setHours(0, 0, 0, 0) / 1000,
          date.setHours(24, 0, 0, 0) / 1000
        );
      }
    }
  };
</script>

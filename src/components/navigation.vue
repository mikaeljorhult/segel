<template>
    <section class="segel-navigation">
        <a v-on:click="decrease">&laquo;</a>
        <flat-pickr v-model="date" v-bind:config="config"></flat-pickr>
        <a v-on:click="increase">&raquo;</a>
    </section>
</template>

<script>
  import Store from '../store/store.js';
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
      date: {
        get: function () {
          return new Date(this.start * 1000).toISOString();
        },
        set: function (value) {
          // No need to do anything as new start property will be passed through after event.
        }
      }
    },

    components: {
      'flat-pickr': flatpickr
    },

    methods: {
      decrease: function () {
        Store.changeTime(Store.state.duration * -1);
      },

      increase: function () {
        Store.changeTime(Store.state.duration);
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

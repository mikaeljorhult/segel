<template>
    <section class="segel-navigation">
        <a v-on:click="decrease">&laquo;</a>
        <flat-pickr v-model="date" v-bind:config="config"></flat-pickr>
        <a v-on:click="increase">&raquo;</a>
    </section>
</template>

<script>
  import flatpickr from 'vue-flatpickr-component';

  export default {
    data: function () {
      return {
        config: {}
      };
    },

    computed: {
      date: {
        get: function () {
          // Format start date to YYYY-MM-DD.
          return new Date(this.$store.state.start * 1000).toISOString();
        },
        set: function (value) {
          // Parse YYYY-MM-DD to Date object.
          let dateObject = new Date(value);

          this.$store.commit('setTime', {
            start: dateObject.setHours(0, 0, 0, 0) / 1000,
            end: dateObject.setHours(24, 0, 0, 0) / 1000
          });
        }
      }
    },

    components: {
      'flat-pickr': flatpickr
    },

    methods: {
      decrease: function () {
        this.$store.commit('setTime', {
          start: this.$store.state.start + (this.$store.getters['duration'] * -1),
          end: this.$store.state.end + (this.$store.getters['duration'] * -1)
        });
      },

      increase: function () {
        this.$store.commit('setTime', {
          start: this.$store.state.start + this.$store.getters['duration'],
          end: this.$store.state.end + this.$store.getters['duration']
        });
      }
    }
  };
</script>

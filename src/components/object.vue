<template>
    <li>
        {{ name }}

        <ul v-bind:class="{ 'drop-target': dropTarget }"
            v-on:dragenter="dragenter"
            v-on:dragleave="dragleave"
            v-on:dragover.prevent="dragover"
            v-on:dragend="dragend"
            v-on:drop.stop="drop"
        >
            <segel-booking v-for="booking in bookings"
                           v-bind:key="booking.id"
                           v-bind:start="booking.start"
                           v-bind:end="booking.end"
            ></segel-booking>
        </ul>
    </li>
</template>

<style scoped>
    ul {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding-left: 0;
        list-style: none;
    }

    li {
        position: relative;
        padding: .5rem 0;
        border-bottom: 1px solid #e6e6e6
    }

    .drop-target {
        background-color: rgba(0, 0, 0, .1);
    }
</style>

<script>
  import Booking from './booking.vue';

  export default {
    props: [
      'name',
      'bookings'
    ],

    data: function () {
      return {
        dropTarget: false
      };
    },

    components: {
      'segel-booking': Booking
    },

    methods: {
      dragenter: function () {
        this.dropTarget = true;
      },
      dragleave: function () {
        this.dropTarget = false;
      },
      dragover: function (e) {
        this.dropTarget = true;
        e.dataTransfer.dropEffect = e.altKey ? 'copy' : 'move';
      },
      drop: function () {
        this.dropTarget = false;
      }
    }
  };
</script>

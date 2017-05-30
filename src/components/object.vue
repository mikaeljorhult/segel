<template>
    <li>
        {{ name }}

        <ul>
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
</style>

<script>
  import Booking from './booking.vue';

  export default {
    props: [
      'name',
      'bookings'
    ],

    data: function () {
      return {};
    },

    components: {
      'segel-booking': Booking
    }
  };
</script>

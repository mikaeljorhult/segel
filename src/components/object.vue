<template>
    <li>
        {{ name }}

        <ul v-dropzone>
            <segel-booking v-for="booking in bookings"
                           v-bind:key="booking.id"
                           v-bind:id="booking.id"
                           v-bind:object="id"
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
        user-select: none;
    }

    li {
        position: relative;
        padding: .5rem 0;
        border-bottom: 1px solid #e6e6e6
    }

    .droppable {
        background-color: rgba(0, 0, 0, .05);
    }
</style>

<script>
  import Booking from './booking.vue';
  import Dropzone from '../directives/dropzone.js';

  export default {
    props: [
      'id',
      'name',
      'bookings'
    ],

    directives: {
      dropzone: Dropzone
    },

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

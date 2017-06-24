<template>
    <ul class="objects">
        <segel-object
                v-for="object in objects"
                v-bind:key="object.id"
                v-bind:id="object.id"
                v-bind:name="object.name"
                v-bind:bookings="relatedBookings(object.id)"
        ></segel-object>
    </ul>
</template>

<style scoped>
    ul {
        overflow: hidden;
        padding-left: 0;
        list-style: none;
    }
</style>

<script>
  import Object from './object.vue';

  export default {
    props: [
      'objects',
      'bookings'
    ],

    data () {
      return {};
    },

    components: {
      'segel-object': Object
    },

    methods: {
      relatedBookings: function (object) {
        return this.bookings.filter(function (booking) {
          return booking.object === object;
        });
      }
    }
  };
</script>

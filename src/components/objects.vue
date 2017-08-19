<template>
    <ul class="segel-objects">
        <segel-object
                v-for="object in objects"
                v-bind:key="object.id"
                v-bind:id="object.id"
                v-bind:name="object.name"
                v-bind:bookings="relatedBookings(object.id)"
        ></segel-object>
    </ul>
</template>

<script>
  import SegelObject from './object.vue';

  export default {
    props: {
      objects: {
        type: Array,
        default: []
      },
      bookings: {
        type: Array,
        default: []
      }
    },

    data () {
      return {};
    },

    components: {
      'segel-object': SegelObject
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

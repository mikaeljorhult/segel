<template>
    <ul class="segel-resources">
        <segel-resource
                v-for="resource in resources"
                v-bind:key="resource.id"
                v-bind:id="resource.id"
                v-bind:name="resource.name"
                v-bind:bookings="relatedBookings(resource.id)"
        ></segel-resource>
    </ul>
</template>

<script>
import SegelResource from "./resource.vue";

export default {
  props: {
    resources: {
      type: Array,
      default: function() {
        return [];
      }
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  data() {
    return {};
  },

  components: {
    "segel-resource": SegelResource
  },

  methods: {
    relatedBookings: function(resource) {
      return this.bookings.filter(function(booking) {
        return booking.resource === resource;
      });
    }
  }
};
</script>

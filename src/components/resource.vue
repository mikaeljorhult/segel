<template>
  <li class="segel-resource">
    {{ name }}

    <ul class="segel-bookings" v-dropzone>
      <segel-booking
        v-for="booking in bookings"
        v-bind:key="booking.id"
        v-bind:id="booking.id"
        v-bind:resource="id"
        v-bind:user="booking.user"
        v-bind:start="booking.start"
        v-bind:end="booking.end"
      ></segel-booking>
    </ul>
  </li>
</template>

<script>
import SegelBooking from "./booking.vue";
import Dropzone from "../directives/dropzone.js";

export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },

  directives: {
    dropzone: Dropzone
  },

  data: function() {
    return {
      dropTarget: false
    };
  },

  inject: ["state"],

  components: {
    "segel-booking": SegelBooking
  },

  methods: {
    dragenter: function() {
      this.dropTarget = true;
    },
    dragleave: function() {
      this.dropTarget = false;
    },
    dragover: function(e) {
      this.dropTarget = true;
      e.dataTransfer.dropEffect = e.altKey ? "copy" : "move";
    },
    drop: function() {
      this.dropTarget = false;
    }
  }
};
</script>

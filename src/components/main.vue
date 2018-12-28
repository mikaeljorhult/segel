<template>
  <section class="segel">
    <div class="segel-container">
      <ul class="segel-grid">
        <li v-for="n in 24">&nbsp;</li>
      </ul>

      <segel-indicator></segel-indicator>
      <segel-ruler></segel-ruler>
      <segel-resources
        v-bind:resources="resources"
        v-bind:bookings="bookings"
      ></segel-resources>
    </div>
  </section>
</template>

<script>
import Store from "../store";
import SegelIndicator from "./indicator.vue";
import SegelRuler from "./ruler.vue";
import SegelResources from "./resources.vue";
import Cast from "../helpers/cast";

export default {
  props: {
    editable: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    bookings: {
      type: Array,
      default: function() {
        return [];
      }
    },
    resources: {
      type: Array,
      default: function() {
        return [];
      }
    },
    time: {
      type: Object,
      default: function() {
        return {
          start: Cast.date(new Date().setHours(0, 0, 0, 0)),
          end: Cast.date(new Date().setHours(24, 0, 0, 0))
        };
      }
    }
  },

  data: function() {
    return Store;
  },

  provide: function() {
    const config = {};
    const state = {};

    Object.defineProperty(config, "editable", {
      enumerable: true,
      get: () => this.editable
    });

    Object.defineProperty(state, "time", {
      enumerable: true,
      get: () => Object.assign(this.time, Store.clock)
    });

    Object.defineProperty(state, "user", {
      enumerable: true,
      get: () => Store.user
    });

    return {
      config: config,
      state: state
    };
  },

  components: {
    "segel-indicator": SegelIndicator,
    "segel-ruler": SegelRuler,
    "segel-resources": SegelResources
  }
};
</script>

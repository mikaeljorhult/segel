<template>
  <section class="segel" ref="main">
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
import { ReactiveProvideMixin } from "vue-reactive-provide";
import SegelIndicator from "./indicator.vue";
import SegelRuler from "./ruler.vue";
import SegelResources from "./resources.vue";
import Cast from "../helpers/cast";
import Events from "../helpers/events";

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
    start: {
      type: Number,
      default: function() {
        return Cast.date(new Date().setHours(0, 0, 0, 0));
      }
    },
    end: {
      type: Number,
      default: function() {
        return Cast.date(new Date().setHours(24, 0, 0, 0));
      }
    },
    steps: {
      type: Number,
      default: function() {
        return 48;
      }
    }
  },

  data: function() {
    return {
      timer: null,
      current: Cast.date(new Date()),
      duration: function() {
        return this.end - this.start;
      }
    };
  },

  mixins: [
    ReactiveProvideMixin({
      name: "config",
      include: ["editable", "steps"]
    }),
    ReactiveProvideMixin({
      name: "time",
      include: ["start", "end", "current", "duration"]
    })
  ],

  components: {
    "segel-indicator": SegelIndicator,
    "segel-ruler": SegelRuler,
    "segel-resources": SegelResources
  },

  methods: {
    updateTimer: function() {
      this.current = Cast.date(new Date());
    },

    cancelTimer: function() {
      clearInterval(this.timer);
    }
  },

  created: function() {
    this.timer = setInterval(this.updateTimer, 1000);

    Events.$on("bookings-create", booking => {
      this.$emit("bookings-create", booking);
    });
    Events.$on("bookings-update", booking => {
      this.$emit("bookings-update", booking);
    });
    Events.$on("bookings-delete", booking => {
      this.$emit("bookings-delete", booking);
    });
  },

  beforeDestroy: function() {
    this.cancelTimer();
  }
};
</script>

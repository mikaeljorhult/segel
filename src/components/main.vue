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
      time: {
        current: Cast.date(new Date()),
        duration: function() {
          return this.end - this.start;
        }
      },
      user: Store.user
    };
  },

  provide: function() {
    const config = {};
    const state = {};
    const time = {};

    Object.defineProperty(config, "editable", {
      enumerable: true,
      get: () => this.editable
    });

    Object.defineProperty(config, "steps", {
      enumerable: true,
      get: () => this.steps
    });

    Object.defineProperty(time, "start", {
      enumerable: true,
      get: () => this.start
    });

    Object.defineProperty(time, "end", {
      enumerable: true,
      get: () => this.end
    });

    Object.defineProperty(time, "current", {
      enumerable: true,
      get: () => this.time.current
    });

    Object.defineProperty(time, "duration", {
      enumerable: true,
      get: () => this.time.duration
    });

    Object.defineProperty(state, "user", {
      enumerable: true,
      get: () => Store.user
    });

    return {
      config: config,
      state: state,
      time: time
    };
  },

  components: {
    "segel-indicator": SegelIndicator,
    "segel-ruler": SegelRuler,
    "segel-resources": SegelResources
  },

  methods: {
    updateTimer: function() {
      this.time.current = Cast.date(new Date());
    },

    cancelTimer: function() {
      clearInterval(this.timer);
    }
  },

  created: function() {
    this.timer = setInterval(this.updateTimer, 1000);
  },

  beforeDestroy: function() {
    this.cancelTimer();
  }
};
</script>

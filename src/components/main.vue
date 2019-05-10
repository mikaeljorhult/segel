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
import debounce from "lodash/debounce";
import { ReactiveProvideMixin } from "vue-reactive-provide";
import SegelIndicator from "./indicator.vue";
import SegelRuler from "./ruler.vue";
import SegelResources from "./resources.vue";
import Cast from "../helpers/cast";
import Events from "../helpers/events";
import Grid from "../helpers/grid";

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
      snap: null,
      size: null
    };
  },

  computed: {
    duration: function() {
      return this.end - this.start;
    }
  },

  mixins: [
    ReactiveProvideMixin({
      name: "config",
      include: ["editable", "steps"]
    }),
    ReactiveProvideMixin({
      name: "grid",
      include: ["size", "snap"]
    }),
    ReactiveProvideMixin({
      name: "time",
      include: ["start", "end", "current", "duration"]
    })
  ],

  methods: {
    updateTimer: function() {
      this.current = Cast.date(new Date());
    },

    cancelTimer: function() {
      clearInterval(this.timer);
    },

    handleResize: function() {
      // Calculate new snap grid.
      this.snap = Grid.create(this.$el.clientWidth, 36, this.steps);

      // Calculate new size restriction.
      this.size = {
        min: {
          width: this.$el.clientWidth / this.steps,
          height: 1
        },
        max: {
          width: this.$el.clientWidth,
          height: 40
        }
      };
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

  mounted: function() {
    this.handleResize();

    window.addEventListener("resize", debounce(this.handleResize.bind(), 150));
  },

  beforeDestroy: function() {
    this.cancelTimer();

    // Remove event listener for resize.
    window.removeEventListener(
      "resize",
      debounce(this.handleResize.bind(), 150)
    );
  },

  components: {
    "segel-indicator": SegelIndicator,
    "segel-ruler": SegelRuler,
    "segel-resources": SegelResources
  }
};
</script>

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
  import Store from '../store';
  import SegelIndicator from './indicator.vue';
  import SegelRuler from './ruler.vue';
  import SegelResources from './resources.vue';

  export default {
    props: {
      resources: {
        type: Array,
        default: function () {
          return [];
        }
      },
      bookings: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },

    data: function () {
      return Store;
    },

    provide: function () {
      const state = {};

      Object.defineProperty(state, 'time', {
        enumerable: true,
        get: () => Store.time,
      });

      Object.defineProperty(state, 'user', {
        enumerable: true,
        get: () => Store.user,
      });

      return { state: state };
    },

    components: {
      'segel-indicator': SegelIndicator,
      'segel-ruler': SegelRuler,
      'segel-resources': SegelResources
    }
  };
</script>

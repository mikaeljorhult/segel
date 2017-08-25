<template>
    <section class="segel">
        <segel-navigation></segel-navigation>
        <div class="segel-container">
            <ul class="segel-grid">
                <li v-for="n in 24">&nbsp;</li>
            </ul>

            <segel-indicator></segel-indicator>
            <segel-ruler></segel-ruler>
            <segel-objects
                    v-bind:objects="objects"
                    v-bind:bookings="bookings"
            ></segel-objects>
        </div>
    </section>
</template>

<script>
  import SegelNavigation from './navigation.vue';
  import SegelIndicator from './indicator.vue';
  import SegelRuler from './ruler.vue';
  import SegelObjects from './objects.vue';

  export default {
    props: {
      objects: {
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
      return {};
    },

    components: {
      'segel-navigation': SegelNavigation,
      'segel-indicator': SegelIndicator,
      'segel-ruler': SegelRuler,
      'segel-objects': SegelObjects
    }
  };
</script>

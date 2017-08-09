<template>
    <section class="segel">
        <segel-navigation></segel-navigation>
        <div class="segel-container">
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
  import Navigation from './navigation.vue';
  import Indicator from './indicator.vue';
  import Ruler from './ruler.vue';
  import Objects from './objects.vue';

  export default {
    props: [
      'objects',
      'bookings'
    ],

    data: function () {
      return {};
    },

    components: {
      'segel-navigation': Navigation,
      'segel-indicator': Indicator,
      'segel-ruler': Ruler,
      'segel-objects': Objects
    }
  };
</script>

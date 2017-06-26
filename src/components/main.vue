<template>
    <section>
        <segel-navigation
                v-bind:start="start"
        ></segel-navigation>
        <segel-ruler></segel-ruler>
        <segel-objects
                v-bind:objects="objects"
                v-bind:bookings="bookings"
        ></segel-objects>
    </section>
</template>

<script>
  import Navigation from './navigation.vue';
  import Ruler from './ruler.vue';
  import Objects from './objects.vue';

  export default {
    props: [
      'start',
      'end',
      'objects',
      'bookings'
    ],

    data: function () {
      return {};
    },

    components: {
      'segel-navigation': Navigation,
      'segel-ruler': Ruler,
      'segel-objects': Objects
    }
  };
</script>

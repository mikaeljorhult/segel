<template>
    <section>
        <segel-ruler></segel-ruler>
        <segel-objects v-bind:objects="this.objects"></segel-objects>
    </section>
</template>

<script>
  import Ruler from './ruler.vue';
  import Objects from './objects.vue';

  export default {
    props: [
      'objects'
    ],

    data: function () {
      return {};
    },

    components: {
      'segel-ruler': Ruler,
      'segel-objects': Objects
    }
  };
</script>

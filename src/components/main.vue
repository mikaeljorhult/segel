<template>
    <section>
        <segel-ruler></segel-ruler>
    </section>
</template>

<script>
  import Ruler from './ruler.vue';

  export default {
    data () {
      return {};
    },
    components: {
      'segel-ruler': Ruler
    }
  };
</script>

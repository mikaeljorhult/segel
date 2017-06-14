<template>
    <ul class="objects">
        <segel-object v-for="object in objects"
                      v-bind:key="object.id"
                      v-bind:id="object.id"
                      v-bind:name="object.name"
                      v-bind:bookings="object.bookings"
        ></segel-object>
    </ul>
</template>

<style scoped>
    ul {
        overflow: hidden;
        padding-left: 0;
        list-style: none;
    }
</style>

<script>
  import Object from './object.vue';

  export default {
    props: [
      'objects'
    ],

    data () {
      return {};
    },

    components: {
      'segel-object': Object
    }
  };
</script>

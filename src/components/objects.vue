<template>
    <ul>
        <li v-for="object in objects">
            {{ object }}
        </li>
    </ul>
</template>

<style scoped>
    ul {
        padding-left: 0;
        list-style: none;
    }
</style>

<script>
  export default {
    props: [
      'objects'
    ],

    data () {
      return {};
    }
  };
</script>

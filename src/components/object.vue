<template>
    <li>
        {{ name }}
    </li>
</template>

<style>
    li {
        position: relative;
        padding: .5rem 0;
        border-bottom: 1px solid #e6e6e6
    }
</style>

<script>
  export default {
    props: [
      'name'
    ],

    data: function () {
      return {};
    }
  };
</script>

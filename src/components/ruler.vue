<template>
  <aside class="segel-ruler">
    <ul>
      <li v-for="label in labels">
        <span>
          {{ label }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: ["labels"]
};
</script>

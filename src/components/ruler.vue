<template>
    <aside class="segel-ruler">
        <ul>
            <li v-for="n in 24">
                <span v-bind:class="[n === new Date().getHours() + 1 ? 'current' : '']">
                    {{ n - 1 | leadingZero }}
                </span>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
  filters: {
    leadingZero: function(value) {
      return ("0" + value).slice(-2);
    }
  }
};
</script>

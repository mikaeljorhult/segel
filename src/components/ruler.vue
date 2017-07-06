<template>
    <aside class="segel-ruler">
        <ul>
            <li v-for="n in 24">
                <span v-bind:class="[n === new Date().getHours() + 1 ? 'current' : '']">
                    {{ n - 1 }}
                </span>
            </li>
        </ul>
    </aside>
</template>

<script>
  export default {};
</script>

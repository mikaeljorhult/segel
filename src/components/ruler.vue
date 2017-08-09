<template>
    <aside class="segel-ruler">
        <ul>
            <li v-for="n in 24">
                <span v-bind:class="[n === new Date().getHours() + 1 ? 'current' : '']">
                    {{ ('0' + (n - 1)).slice(-2) }}
                </span>
            </li>
        </ul>
    </aside>
</template>

<script>
  export default {};
</script>

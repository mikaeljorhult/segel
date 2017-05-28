<template>
    <aside>
        <ul>
            <li v-for="n in 24">
                <span v-bind:class="[n === new Date().getHours() + 1 ? 'current' : '']">
                    {{ n - 1 }}
                </span>
            </li>
        </ul>
    </aside>
</template>

<style scoped>
    aside {
        background-color: #e6e6e6;
    }

    ul {
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        list-style: none;
        font-size: .8rem;
    }

    li {
        flex: 1;
        position: relative;
        padding: .25rem 0 1.5rem 0;
    }

    li::before,
    li::after {
        content: '';
        display: block;
        width: 1px;
        height: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #000;
    }

    li::after {
        height: .66rem;
        left: 50%;
        margin-left: -1px;
    }

    span {
        display: block;
        width: 100%;
        margin-left: -50%;
        text-align: center;
    }
</style>

<script>
  export default {
    data () {
      return {};
    }
  };
</script>

<script>
import { store } from './assets/data/store.js';
import BaseList from './BaseList.vue'
export default {
    name: "AppMain",
    components: { BaseList },
}
</script>

<template>
    <section>
        <BaseList />
    </section>
    <section>
        <BaseList />
    </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
}
</style>
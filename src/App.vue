<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
    name: "App",
    components: {
        AppHeader,
        AppMain
    },
    methods: {
        fetchMovies(pippo) {

        }
    }
}
</script>

<template>
    <AppHeader @search-text="fetchMovies" />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>

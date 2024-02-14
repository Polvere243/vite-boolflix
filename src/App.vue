<script>
import { store } from './assets/data/store.js';
import { api } from './assets/data/index.js';
const { uri, movieEndpoint, tvShowsEndpoint, apiKey } = api;
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import BaseDiv from './components/BaseDiv.vue'

export default {
    name: "App",

    components: {
        AppHeader,
        AppMain,
        BaseDiv
    },


    methods: {
        fetchMovies(term) {
            console.log(term);
            const searchEndpoint = `${uri}${movieEndpoint}?query=${term}&api_key=${apiKey}`;

            axios.get(searchEndpoint).then(res => {
                store.movies = res.data.results.map(movie => {
                    return {
                        id: movie._id,
                        lang: movie.original_language,
                        originalTitle: movie.original_title,
                        plot: movie.overview,
                        title: movie.title,
                        vote: movie.average_vote,
                        imgage: movie.poster_path
                    }
                });

            })
        },
        fetchTvShows(term) {
            console.log(term);
            const searchEndpoint = `${uri}${tvShowsEndpoint}?query=${term}&api_key=${apiKey}`;
            axios.get(searchEndpoint).then(res => {
                store.tvShows = res.data.results.map(tvShow => {
                    console.log(res.data.results);
                    return {
                        id: tvShow._id,
                        lang: tvShow.original_language,
                        originalTitle: tvShow.original_name,
                        plot: tvShow.overview,
                        title: tvShow.name,
                        vote: tvShow.average_vote,
                        imgage: tvShow.poster_path
                    }
                })
            })
        },
        fetchProducts(term) {
            console.log(term);

            if (!term) {
                console.error("Manca un termine di ricerca");
                return;
            }
            this.fetchMovies(term);
            this.fetchTvShows(term);
            console.log(this.store.tvShows, this.store.movies);
        }
    }
}
</script>

<template>
    <AppHeader @search-text="fetchProducts" />
    <!-- <BaseDiv /> -->
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>

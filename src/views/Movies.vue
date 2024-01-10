<template>
  <div>
    <h3>Watched Movies ({{ movieStore.watchedMovies.length }})</h3>
    <Movie
        v-if="movieStore.watchedMovies.length"
        v-for="movie of movieStore.watchedMovies"
        :key="movie.id"
        :movie="movie" />
    <p v-else style="text-align: center">No movie added</p>
  </div>
  <h3>All Movies ({{ movieStore.totalCountMovies }})</h3>
  <Movie
      v-for="movie of movieStore.movies"
      :key="movie.id"
      :movie="movie" />
</template>

<script setup>
import Movie from "../components/Movie.vue";
import { useMovieStore } from "../store/MovieStore";

const movieStore = useMovieStore();
</script>

<style lang="css">
</style>

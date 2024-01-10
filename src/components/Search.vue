<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
        type="text"
        class="search-input"
        placeholder="Input movie"
        v-model="searchMovie" />
  </form>
  <p v-if="!searchStore.movies.length" style="margin-top: 0">* need to enable VPN</p>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true" />
  </div>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import Movie from "../components/Movie.vue";
import { ref } from "vue";
import { useSearchStore } from "../store/SearchStore";

const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
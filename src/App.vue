<template>
  <main>
    <div>
     <AppHeader />
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <Movies />
    </div>
    <div class="search" v-else>
      <Search />
    </div>
  </main>
</template>

<script setup>
import Search from "./components/Search.vue";
import Movies from "./views/Movies.vue";
import AppHeader from "./views/AppHeader.vue";
import { useMovieStore } from "./store/MovieStore";

const movieStore = useMovieStore();
</script>

<style lang="css">
</style>
import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";
import { ref } from "vue";

const url =
    "https:api.themoviedb.org/3/search/movie?api_key=115425b7808af35701b4f2452a51efe7&query=";

export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);

    const getMovies = async (search) => {
        try {
            loader.value = true;
            const res = await fetch(`${url}${search}`);
            const data = await res.json();
            movies.value = data.results;
            loader.value = false;
        } catch (e) {
            loader.value = false;
            throw e;
        }
    };

    const addToUserMovies = (object) => {
        const movieStore = useMovieStore();
        movieStore.movies.push({ ...object, isWatched: false });
        movieStore.activeTab = 1;
    };

    return {
        loader,
        movies,
        getMovies,
        addToUserMovies,
    };
});
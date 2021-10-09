<template>
  <div class="billboard">
    <h1>Check the latest films</h1>
    <div class="billboard-container">
      <template v-for="movie in moviesList">
        <Card :key="movie.id" :id="movie.id" :img="movie.image" :title="movie.fullTitle" :rating="movie.imDbRating" />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import imdbAPI from '@/logic/imdb'
import Card from '../components/Card.vue'

export default {
  name: 'Billboard',
  components: {
    Card
  },
  computed: {
    ...mapState(["moviesList"]),
  },
  mounted() {
    if(!this.moviesList.length) this.getMovies();
  },
  methods: {
    async getMovies() {
      this.$store.commit('updateMoviesList', await imdbAPI.getMoviesList());
    }
  }
}
</script>

<style scoped>
.billboard-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.billboard-container *{
  margin: 4rem;
}
</style>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Movie Recommender App"/>
    {{ movies }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imbdAPI from "@/logic/imdb";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({
    movies: []
  }),
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.movies = await imbdAPI.getMoviesList();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

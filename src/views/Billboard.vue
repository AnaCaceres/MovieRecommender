<template>
  <div class="billboard">
    <h1>Check the most popular films</h1>
    <button class="button" @click="changeOrder">
      Order by: {{ otherOption }}
    </button>
    <div class="billboard-container">
      <template v-for="movie in shownMovies">
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
  data:() => ({
    order: "rank"
  }),
  computed: {
    ...mapState(["moviesList"]),
    orderedByScore() {
      let ordered = [...this.moviesList];
      ordered.sort(function(a, b){
        if(!a.imDbRating) return 1;
        if(!b.imDbRating) return -1;
        let scoreA = parseFloat(a.imDbRating);
        let scoreB = parseFloat(b.imDbRating);
        if (scoreA > scoreB) 
        {
          return -1;
        }    
        else if (scoreA < scoreB)
        {
          return 1;
        }   
        return 0;
      });
      return ordered
    },
    shownMovies() {
      return this.order === "score" ? this.orderedByScore : this.moviesList;
    },
    otherOption() {
      return this.order === "score" ? "rank" : "score";
    }
  },
  mounted() {
    if(!this.moviesList.length) this.getMovies();
  },
  methods: {
    async getMovies() {
      this.$store.commit('updateMoviesList', await imdbAPI.getMoviesList());
    },
    changeOrder() {
      this.order = this.order === "score" ? "rank" : "score";
    }
  }
}
</script>

<style scoped>
.button {
  display:inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid #2D3231;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color:#2D3231;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
}

.button:hover{
  color:#FFFFFF;
  background-color:#2D3231;
}
@media all and (max-width:30em){
  button{
    display:block;
    margin:0.4em auto;
  }
}
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
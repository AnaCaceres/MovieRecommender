<template>
  <div class="movie">
    <div id="nav">
      <router-link to="/" class="button">
        <i class="fas fa-chevron-left"></i>
        Go back to Billboard
      </router-link>
    </div>
    <div class="details">     
      <h1>{{currentMovie.title}}</h1>
      <div class="film-description">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img class="banner" :src="currentMovie.image" :alt="currentMovie.title">
            </div>
            <div class="flip-card-back">
              <p><b>Released:</b> {{currentMovie.releaseDate}}</p>
              <p><b>Duration:</b> {{currentMovie.runtimeMins ? currentMovie.runtimeMins + " minutes" : "Unspecified"}}</p>
              <p><b>Direction:</b> {{currentMovie.directors}}</p>
            </div>
          </div>
        </div>
        <div class="description">
          <h2>Description</h2>
          <p>{{currentMovie.plot}}</p>
        </div>
      </div>
      <h2>Main cast</h2>
      <div class="actors">        
        <template v-for="actor in currentMovie.actorList" >
          <Actor :key="actor.id" :img="actor.image" :name="actor.name" :character="actor.asCharacter"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import imdbAPI from '@/logic/imdb'
import Actor from '../components/Actor.vue'

export default {
  name: 'Movie',
  components: {
    Actor
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["currentMovie"]),
  },
  mounted() {
    if(!this.currentMovie || this.currentMovie.id !== this.id) {
      this.getMovieDetail();
    }
  },
  methods: {
    async getMovieDetail() {
      this.$store.commit('updateCurrentMovie', await imdbAPI.getMovieDetail(this.id));
    }
  }
}
</script>

<style scoped>
#nav {
  text-align: left;
  margin: 2em;
}
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

.details {
  margin: 0 4rem;
  padding: 2rem;
  border-radius: 15px;
  background: #E9F5F1;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.4);
}

.film-description {
  display: flex;
  flex-wrap: wrap;
  margin: 4em 0;
}

.film-description .description {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 4em;
}

.flip-card {
  width: 250px;
  height: 400px;
  margin: auto;
  background-color: transparent;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.banner {
  width: 100%;
  height: 100%;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: #2D3231;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.actors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
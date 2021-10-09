import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moviesList: [],
    currentMovie: []
  },
  mutations: {
    updateMoviesList (state, n) {
      state.moviesList = n;
    },
    updateCurrentMovie (state, n) {
      state.currentMovie = n;
    },
  },
})

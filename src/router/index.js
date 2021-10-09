import Vue from 'vue'
import VueRouter from 'vue-router'
import Billboard from '../views/Billboard.vue'
import Movie from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Billboard',
    component: Billboard
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

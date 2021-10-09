const apiKey = 'pk_9gy4e8nkvj1op625v';

export default {
  getMoviesList() {
    return fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`).then(response => response.json())
  },
  getMovieDetail(id) {
    return fetch(`https://imdb-api.com/en/API/Title/${apiKey}/${id}`).then(response => response.json())
  }
}
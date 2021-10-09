const apiKey = 'k_90pj1jw0';

export default {
  getMoviesList() {
    return fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`).then(response => response.json()).then(data => data.items)
  },
  getMovieDetail(id) {
    return fetch(`https://imdb-api.com/en/API/Title/${apiKey}/${id}`).then(response => response.json())
  }
}
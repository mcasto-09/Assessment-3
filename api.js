import fetch from 'node-fetch';

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmJkMDdlNjdlNmM4MGYzOWVkMDkwYjRhNjk4OTBkOSIsInN1YiI6IjY2NWI4OTI2OWYyYzIxOTY3M2U3NmNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QmjEnue_YOIyilqwU6m-ppycnbWCP2s_SlL_ZYWf0aU'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

export function movieRandomizer() {
  const movies = response.data.results
  const randomI = Math.floor(Math.random() * movies.length)
  const randomM = movies[randomI]
  
  const movieURL = `https://www.themoviedb.org/movie/${randomM.id}`
  console.log(movieURL)
}

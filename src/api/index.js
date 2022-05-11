import axios from 'axios';


function fetch(title,page) {
  return axios.get(`https://www.omdbapi.com/?apikey=7035c60c&s=${title}&page=${page}`);
}
function fetchMovie(id) {
  return axios.get(`https://www.omdbapi.com/?apikey=7035c60c&i=${id}`);
  
}
export {
  fetch,
  fetchMovie,
}


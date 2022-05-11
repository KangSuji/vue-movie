import { createStore } from 'vuex';
import { fetchMovie , fetch} from '../api/index';

export default createStore({
  state: {
    movie: {},
    movies: []

  },
  getters: {
    
  },
  mutations: {
    SET_MOVIE(state, movie) {
      state.movie = movie;
    },
    SET_MOVIE_TITLE(state, movies) {
      const {Search} = movies;
      state.movies.unshift(...Search)
    }
    
  },
  actions: {
    FETCH_MOVIE(context, id) {
      fetchMovie(id)
      .then(res => {
        context.commit('SET_MOVIE', res.data)
      })
      .catch(error => console.log(error))
    },
    FETCH_MOVIE_TITLE(context, payload) {
     
      fetch(payload.title, payload.page)
        .then( res => {
          context.commit('SET_MOVIE_TITLE', res.data)
        })
        .catch( error => console.log(error))
    }
  }
});
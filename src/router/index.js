import { createRouter, createWebHistory } from 'vue-router';
import MovieView from '../views/MovieView.vue';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/vue-movie/',
          component: HomeView
        },
        { 
          path: '/vue-movie/movie/:id', 
          component: MovieView,
          props: true,
        },
        { 
          path: '/vue-movie/search', 
          name: 'search',
          component: SearchView,
          props: true,
        },
        
    ]
})
import { createRouter, createWebHistory } from 'vue-router';
import MovieView from '../views/MovieView.vue';
import HomeView from '../views/HomeView.vue';
import SearchView from '../views/SearchView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: HomeView
        },
        { 
          path: '/movie/:id', 
          component: MovieView,
          props: true,
        },
        { 
          path: '/search', 
          name: 'search',
          component: SearchView,
          props: true,
        },
        
    ]
})
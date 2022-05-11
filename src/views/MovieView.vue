<template>
  <div class="movie-section">
    <div class="movie-img">
      <img :src="sizingPoster"/>
    </div>
    <div class="movie-info">
      <div class="movie-title margins-50">{{this.movie.Title}}</div>
      <div class="margins-50 info-text">
        <span>{{this.movie.Released}} | </span>
        <span>{{this.movie.Runtime}}</span>
      </div>
      <div class="margins-50 info-text">{{this.movie.Plot}}</div>
      <div class="info-head">Ratings</div>
      <div class="ratings-wrap">
        <div class="ratings margins-50" v-for="{ Source: name, Value: score } in movie.Ratings" :key="name">
          <img 
            :src="`https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/${name}.png`"
            :alt="name" />
          <span class="info-text">{{ score }}</span>
        </div>
      </div>
      <div class="info-head">Director</div>
      <div class="margins-50 info-text">{{this.movie.Director}}</div>
      <div class="info-head">Actors</div>
      <div class="margins-50 info-text">{{this.movie.Actors}}</div>
    </div>
    
  </div>
</template>

<script>
import { fetchMovie } from '../api/index.js';

export default {
  data() {
    return {
      movie:{}
    }
  },
  computed: {
    sizingPoster() {
      let poster = String(this.movie.Poster);
      poster = poster.replace('SX300', 'SX700');
      return poster;
    }
  },
  created() {
    if(this.$route.params){
      const id =this.$route.params.id;
      fetchMovie(id)
      .then(res => {
        this.movie = res.data;
      })
      .catch(error => console.log(error))
    }else{
      const id = 'tt1340800'
      fetchMovie(id)
      .then(res => {
        this.movie = res.data;
      })
      .catch(error => console.log(error))
    }
    
  }
    
}
</script>

<style scoped>
.movie-section {
  display: flex;
  justify-content: space-evenly;
  padding: 50px 48px;
  flex-wrap: wrap-reverse
}
.movie-img img {
  width: 700px;
}
.movie-info {
  width: 500px;
}
.movie-title {
  font-size: 4rem;
  font-weight: 700;
}
.margins-50 {
  margin-bottom: 50px;
}
.info-head {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
}
.info-text {
  color: #5a5a5a;
}
/* Rating */
.ratings-wrap {
  display: flex;
  
}
.ratings {
  display: flex;
  align-items: center;
  margin-right: 6px;
}
.ratings img {
  height: 30px;
  flex-shrink: 0;
  margin-right: 6px;
}
@media (max-width: 800px) {
  .movie-img img {
    width: 300px;
  }
}

</style>
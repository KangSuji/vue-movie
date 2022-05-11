<template>
  <div class="search-section">
    <div class="search-head">
      <span class="section-title">Search</span>
    </div>
    <div class="search-movie">
      <form v-on:submit.prevent="submitClick()">
        <input class="input-form" type="text" v-model="title" placeholder="Search for Movies, Series & more"/>
        <input type="submit" value="Search" />
      </form>
    </div>
    <div class="search-poster">
      <div class="movie-poster">
        <router-link 
          :to="`/movie/${item.imdbID}`"
          v-for="(item,i) in movies" 
          :key="i" class="movie-poster-img">
           <div>
              <img :src="item.Poster" />
            </div>
            <div class="movie-title">
              <div class="year">{{item.Year}}</div>
              <div class="title">{{item.Title}}</div>
            </div>
        </router-link>
      </div>
    </div>
    

  </div>
</template>
<script>

export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  created() {
    const payload = {
      page: 1,
      title: this.$attrs.title
    }
    this.$store.state.movies = [];
    if(payload.title){
      for(payload.page = 1; payload.page<=3; payload.page ++){
        this.$store.dispatch('FETCH_MOVIE_TITLE', payload);
        
      }
    }
  },
  methods: {
    submitClick() {
      const payload = {
        page: 1,
        title: this.title
      }
      this.$store.state.movies = [];
      for(payload.page = 1; payload.page<=3; payload.page ++){
        this.$store.dispatch('FETCH_MOVIE_TITLE', payload);
      }
    }
  }
}
</script>

<style scoped>
 
  .search-head {
  padding: 30px 0px 30px 48px;

  }
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .search-movie {
    padding: 0px 0px 0px 48px;
    margin-bottom: 50px;
    background-color: #F5F5F5;
  }
  .search-movie form {
    background-color: none;
  }
  .input-form {
    margin: 30px 0;
  }
  
  input[type="text"] {
    width: 33%;
    height: 15px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    background: none;
  }
  input[type="text"]:focus {
    outline: none;
  }
  input[type="submit"] {
    border : none;
    background-color: #c9c9c9;
    border-radius: 10px;
    width: 70px;
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #303030;
    color: #fff;
  }
  .movie-poster {
    padding: 30px 0px 30px 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap : wrap;
    
  }
  .movie-poster-img {
    margin-right: 10px;
    position: relative;
    cursor: pointer;
  }
  .movie-poster-img img{
    width: 200px;
    height: calc(200px *3/2);
    margin-bottom: 10px;
  }
  .search-poster {
    display: flex;
    justify-content: center;
  }
  .movie-title {
    position: absolute;
    bottom: 11px;
    width: 200px;
    height: 80px;
    background-color: rgba(black, .7);
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .movie-poster-img img:hover {
    border: 3px solid #838383;
    box-sizing: border-box;
    
    
  }
  .movie-title .year {
    color: #c9c9c9;
  }
  .movie-title .title {
    color: #fff;
  }
  @media (max-width: 500px) {
    input[type="text"] {
      width: 30%; 
    }
    .movie-poster-img img{
      width: 100px;
      height: calc(100px *3/2);
    }
    .movie-title {
      width: 100px;
      height: 50px;
      font-size: 0.5rem;
    }
  }
</style>
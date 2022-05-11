<template>
  <div class="nav-section">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link :to="`/movie/${this.id}`">Movie</router-link></li>
        <li><router-link to="/search">Search</router-link></li>
      </ul>
      
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id:'tt1340800'
    }
  }
  
}
</script>

<style scoped>
  .nav-section {
    background-color: #F5F5F5;
  }
  nav {   
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  nav ul{
    padding: 30px 0px 30px 48px;
    display: flex;
    
  }
  nav ul li {
    margin-right: 30px;
    
  }
  nav a {
    font-weight: 700;
  }

  nav a:hover {
    text-decoration: underline;
  }

</style>
<template>
  <div>
    <div class="home-section">
      <span class="section-title">Home</span>
      <form class="input-form" v-on:submit.prevent="goSearch(this.title)">
        <input type="text"  v-model="title" placeholder="Search for Movies, Series & more"/>
        <input type="submit" value="Search" />
      </form>
    </div>
    <div class="contect-section">
      <div class="contect-title">Contect</div>
      <div class="contect-info">
        <div class="logo">
          <img src="../assets/logo.png" />
        </div>
        <div class="my-info">
          <div>SUJIKANG</div>
          <div>010-9660-5987</div>
          <div>sukang0608@naver.com</div>
          <a href="https://github.com/KangSuji" target="_blank" class="gogit">Go!Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      title: '',
    }
  },
  methods: {
    goSearch(title) {
      this.$router.push({path:'/search', name:'search', params:{title}})
    }
  }
}
</script>

<style scoped>
.home-section {
  padding: 30px 48px 30px 48px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  
}
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
}
.input-form {
  margin: 10px 0px 10px 50px;

}
input[type="text"] {
  width: 250px;
  height: 15px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
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
  color: #fff;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #303030;
  color: #fff;
}
.contect-section {
  padding: 30px 48px 30px 48px;
  box-sizing: border-box;
}
.contect-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
}
.contect-info {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.logo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #303030;
  background-color: #c9c9c9;
}
.logo img {
  width: 200px;
}
.my-info {
  display: flex;
  line-height: 2rem;
  justify-content: center;
  flex-direction: column;

}
.gogit {
  width: 100px;
  border: 1px solid black;
  border-radius: 50px;
  text-align: center;
  margin-top: 10px;
}
.gogit:hover {
  background-color: #303030;
  color: #fff;
}
@media (max-width: 450px) {
  input[type="text"] {
    width: 50%;
  }
  .home-section {
    padding: 30px 48px 30px 48px;
    display: flex;
    flex-direction: column;
   text-align: center;
  }
  .input-form {
    margin: 10px 0px;
  }
  .contect-section {
    text-align: center;
  }

}

</style>
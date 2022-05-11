<template>
  <navgation-bar></navgation-bar>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import NavgationBar from './components/NavigationBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    NavgationBar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif
}
a {
  text-decoration: none;
  color: #000;
}
</style>

<template>
  <header>
    <div class="container">
    <div class="header-title">
      <span>OMDb API</span><br/>
      THE OPEN<br/>
      MOVIE DATABASE
    </div>
    <p class="header-text">
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br/>
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header-section{
    height: 300px; 
  }
  .header-title {
    font-size: 3rem;
    padding: 30px 48px;
    font-family: 'Alfa Slab One', cursive;
  }
  .header-title span {
    color: #747272;
  }
  .header-text {
    padding: 20px 0px 30px 48px;
    color: #747272;
    font-family: 'Roboto Condensed', sans-serif;
  }
  @media (max-width: 460px) {
    .header-text {
      padding: 20px 48px 30px 48px;
  }
  }
</style>
<template>
  <div class="container-fluid">
    <Header/>
    <div id="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  
}

#content{
  min-height: 90vh;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}

Footer{
  min-height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
}

</style>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>


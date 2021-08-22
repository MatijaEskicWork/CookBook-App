<template>
    <div class="container">
      <div id="content">
        <router-view/>
      </div>
    </div>

</template>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('./assets/background.jpg');
  background-position: center top;*/
  
}

#content{
  min-height: 90vh;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.0);
}

Footer{
  min-height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
}

hr {
  border: 2px solid black;
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


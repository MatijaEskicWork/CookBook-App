<template>
  <div class="row">
    <div class="col">
      <h2 id="top-3-recepta">Top 3 recepta</h2>
    </div>  
  </div>
  <div class="row">
    <div class="col-12">
      Slideshow ne radi kako treba
      <!--<SlideshowRecepti/>-->
    </div>
  </div>
</template>

<style>
#top-3-recepta{
  margin-top: 20px;
  text-align: center;
}
SlideshowRecepti{
  width: 90%;
  height: 50%;
  object-fit: cover;
}
</style>

<script>

//import SlideshowRecepti from '@/components/CarouselTop3Recepta.vue'

export default {
  name: 'Pocetna',
  components: {
    //SlideshowRecepti
  },
  created(){
    document.title = 'Početna';
  }
}
</script>

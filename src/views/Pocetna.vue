<template>
  <div class="row">
    <div class="col">
      <!--<h2 id="top-3-recepta">Top 3 recepta</h2>-->
    </div>  
  </div>
  <div class="row">
    <div class="col-12">
      <SlideshowRecepti/>
    </div>
  </div>
  <hr class="linija">
  <div id="blogovi">
    <h1 id="header-blogovi">Blogovi koje preporučujemo</h1>
    <Blogovi/>
  </div>
  <hr class="linija">
  <div id="kulinarski-kursevi">
    <h1 id="header-kulinarski-kursevi">Kulinarski kursevi</h1>
    <KursKuvanja/>
  </div>
  <hr class="linija">
  <div id="baneri">
    <h1>Sponzori sajta</h1>
    <Baneri/>
  </div>
</template>

<style>
#top-3-recepta{
  margin-top: 50px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: underline;
}
#header-blogovi{
  margin-top: 10vh;
  margin-bottom: 5vh;
}
#header-kulinarski-kursevi{
  margin-top: 10vh;
  margin-bottom: 5vh;
}
#baneri{
  margin-top: 10vh;
  margin-bottom: 5vh;
}

.linija{
  border: 1px dotted #ff0000;
}
</style>

<script>

import SlideshowRecepti from '@/components/CarouselTop3Recepta.vue'
import Blogovi from '@/components/Blogovi.vue'
import KursKuvanja from '@/components/KursKuvanja.vue'
import Baneri from '@/components/Baneri.vue'

export default {
  name: 'Pocetna',
  components: {
    SlideshowRecepti,
    Blogovi,
    KursKuvanja,
    Baneri
  },
  created(){
      localStorage.removeItem("listaRecepata");
      if (localStorage.getItem("listaRecepata") == null) {
            let recepti = [
                {ime: "Recept1", 
                  tezina:4.3, 
                  ocena:4.3, 
                  slika:"assets/recepti/musaka.jpg", 
                  kratakOpis:"aaaaada asdsdasd sda as d sd s dsafjaf gsdjg", 
                  tip:'glavno jelo'
                }
            ];
            localStorage.setItem("listaRecepata", JSON.stringify(recepti));
      }
      
    document.title = 'Početna';
    
  },
  mounted()
  {
    // postavljanje aktivne klase
    $(".btn.active").each(function(){
      $(this).removeClass('active');
    });
    
    $("#btn-pocetna").addClass('active');
  }
}
</script>

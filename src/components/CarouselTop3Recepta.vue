<template>
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active top-tri-1">
      <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="d-block carousel-slika" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item top-tri-2">
      <img src="../assets/serbian-flag-icon.png" class="d-block w-100 carousel-slika" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item top-tri-3">
      <img src="../assets/american-flag-icon.png" class="d-block w-100 carousel-slika" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>    
</template>

<style>
#carousel{
    width: 100%;
    margin: auto;
}
.carousel-item{
    max-height: 50vh;
}

.carousel-item>img{
    max-width: 100vw;
    width: 100%;
    max-height: 50vh;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}
</style>

<script>
export default{
    name: 'SlideshowRecepti',
    methods:{
      nadjiProsecnuOcenu(recept){
        let ocene = recept.ocene;
        let suma = 0;
        let prosecnaOcena = 0;
        ocene.forEach(ocena => {
            suma += ocena;
        });
        prosecnaOcena = suma / ocene.length;
        prosecnaOcena = this.prosecnaOcena.toFixed(2);

        return prosecnaOcena;
      },
      nadjiTopTriRecepta(){
        let receptiLocalStorage = [];
        if(localStorage.getItem('recepti') == null)
        {
          localStorage.setItem('recepti', JSON.stringify(receptiLocalStorage));
        }
        else
          receptiLocalStorage = JSON.parse(localStorage.getItem('recepti'));

        receptiLocalStorage.sort(function(recept1, recept2){
          
          // Nije moglo da se ubaci u funkciju, jer ne moze da se prosledi this
          let prosecnaOcena1 = 0;
          let prosecnaOcena2 = 0;
          
          let ocene = recept1.ocene;
          if(typeof ocene !== 'object')
            ocene = [ocene];
          let suma = 0;
          ocene.forEach(ocena => {
              suma += ocena;
          });
          prosecnaOcena1 = suma / ocene.length;
          prosecnaOcena1 = prosecnaOcena1.toFixed(2);

          ocene = recept2.ocene;
          if(typeof ocene !== 'object')
            ocene = [ocene];
          suma = 0;
          ocene.forEach(ocena => {
              suma += ocena;
          });
          prosecnaOcena2 = suma / ocene.length;
          prosecnaOcena2 = prosecnaOcena2.toFixed(2);

          return prosecnaOcena2 - prosecnaOcena1;
        });

        return receptiLocalStorage.slice(0, 3);
      },
      dohvatiSliku(img, id)
      {
          return require('../assets/recepti/' + id + '/' + img);
      },
      urediHTML(div, recept)
      {
        let img1 = div.getElementsByTagName('img')[0];
        img1.src = this.dohvatiSliku(recept.slike[0], recept.id);
        let h5Naziv = div.getElementsByTagName('h5')[0].innerHTML = recept.naziv;
        let pOcena = div.getElementsByTagName('p')[0].innerHTML = "Ocena " + this.nadjiProsecnuOcenu(recept);
      }
    },
    mounted(){
      let topTriRecepta = this.nadjiTopTriRecepta();
      let divPrvi = document.getElementsByClassName('top-tri-1')[0];
      let divDrugi = document.getElementsByClassName('top-tri-2')[0];
      let divTreci = document.getElementsByClassName('top-tri-3')[0];

      this.urediHTML(divPrvi, topTriRecepta[0]);
      this.urediHTML(divDrugi, topTriRecepta[1]);
      this.urediHTML(divTreci, topTriRecepta[2]);
    }
}
</script>


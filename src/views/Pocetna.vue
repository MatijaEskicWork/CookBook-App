<template>
  <div class="row">
    <div class="col">
      <!--<h2 id="top-3-recepta">Top 3 recepta</h2>-->
    </div>  
  </div>
  <div class="row">
    <div class="col-12">
      <!--<SlideshowRecepti/>-->
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
    if (localStorage.getItem("listaRecepata") != null) {
      localStorage.removeItem("listaRecepata");
    }
    let recepti = [
          {ime: "Kaubojski kavijar", 
            tezina:2.5, 
            ocena:0.0, 
            slika:"assets/recepti/predjela/kaubojskikavijar1.jpg", 
            kratakOpis:'<b>SASTOJCI</b> <br/>-trećina šolje soka od limuna <br/>-jedna kašičica maslinovog ulja <br/>-polovina jednog belog luka, izrendanog <br/>-košer so i biber <br/>-440 grama opranog crnog graška <br/>-230 grama kampari ili šljivastog paradajza <br/>-dva mlada luka iseckana<br/>-jedna žuta paprika iseckana<br/>-jedna veća halapinjo paprika iseckana<br/>-zrna kukuruza sa dva klipa kukuruza<br/>-jedan avokado iseckan na komade<br/>-polovina šoljice iseckanog korijandera<br/>-čips za serviranje <br><b>PRIPREMA</b><br/>U veću posudu staviti sve sastojke osim avokada i korijandera. Ostaviti u frižider na 30 minuta do 2 sata. Kasnije pri serviranju ubaciti avokado i korijander i služiti uz čips.', 
            tip:'predjelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:45,
            opisJela: "A healthy and hearty make-ahead dip, this recipe is the ultimate side dish to bring to your next potluck or backyard party. It's easy and inexpensive to put together, and your crowd will surely love it — just don’t forget the chips!"
          },
        {
          ime: "Letnje rolnice",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/predjela/letnjerolnice1.jpg",
          kratakOpis: "<b>SASTOJCI</b><br/>Za umak:<br/>-polovina šolje soka od limuna<br/>-jedna kašičica pirinčanog sirća<br/>-pola kašičice soja sosa<br/>-jedna kašičica vode<br/>-zeleni deo mladog luka tanko iseckan<br/>-pola kašičice javorovog sirupa<br/>-četvrtina kašičice tucane paprike<br/>Za rolnicu:<br/>-8 pirinčanih papira(wrap-ova)<br/>-polovina šoljice mladog zelenila<br/>-jedan avokado iseckan<br/>-jedan mladi luk iseckan na štapiće<br/>-četvrtina oljuštenog ananasa iseckanog na štapiće<br/>-polovina Engleskog krastavca iseckanog na štapiće<br/>-115 grama boranije<br/>-četvrtina šoljice listova sveže nane<br/>-polovina šoljice izdanka graška<br/><b>PRIPREMA<b/><br>Napravite sos: U činiji pomešajte sve sastojke. Napravite rolnice: Napunite veći tanjir ili činiju toplom vodom. Svaki pirinčani tanjir pre pravljenje rolnice ubacite u vodu na 20 sekundi. Ubacite štapićaste sastojke i obavijte ih listastim sastojcima. Presavijte strane tako da zapečate rolnicu, zatim preklopite bazu preko punjenja, smotajte ih da zapečatite, pazeći da ne pocepate papir. Ponovite isti proces za ostale rolnice. Rolnice podelite na pola i poslužite sa umakom.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:30,
          opisJela: "Turn an easy appetizer or dinner into a fun family activity with this summer rolls recipe — it’s a blast to make and even more enjoyable to eat! This Vietnamese restaurant staple is easy to make at home with store-bought rice paper wrappers, your favorite veggies, and an addictive dipping sauce."
        },
        {
          ime: "Laka crvena salsa",
          tezina: 2.0,
          ocena: 0.0,
          slika: "assets/recepti/predjela/lakacrvenasalsa1.jpg",
          /*treba dodati opis*/
          kratakOpis: "<b>SASTOJCI</b><br/>-dve halapenjo papričice iseckane<br/>-polovina malog belog luka iseckanog<br/>-dve kašičice soka od limuna<br/>-košer so i biber<br/>-polovina šoljice korijanderovih listova<br/>-tortilja čips za posluživanje <br/><b>PRIPREMA<b/><br>U veliku posudu ubacite halapenjo papričice i luk sa limunovim sokom, stavite so i biber i pustite da odstoji 10 minuta. Ubacite paradajz i korijander. Poslužite sa tortilja čipsom.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:25,
          opisJela: "No need to buy salsa from the store ever again: This easy red salsa recipe is about to be your new go-to snack. Bright, fresh, and loaded with flavor, you'll want to load up on chips to serve this dip at every party (did someone say Cinco de Mayo?). Our (vegan!) salsa takes advantage of fresh tomatoes, spicy jalapeños, and plenty of cilantro for bold flavor. Top tip: Marinating the onions and jalapeños in lime juice will tame the raw bite while still keeping all of the taste that you love about these slightly spicy ingredients."
        }
      ];

      let engleskiRecepti = [
          {ime: "Cowboy caviar", 
            tezina:2.5, 
            ocena:0.0, 
            slika:"assets/recepti/kaubojskikavijar1.jpg", 
            kratakOpis:"<b>INGREDIENTS</b> <br/>-1/3 cup of lime juice<br/>-1 tablespoon of olive oil<br/>-1/2 clove garlic, grated<br/>-kosher salt and pepper<br/>-15.5 oz can of black-eyed peas, rinsed<br/>-1/2 lb. campari or plum tomatoes, cut into 1/4-inch pieces<br/>-2 scallions, finely chopped<br/>-1 yellow pepper, finely chopped<br/>-1 large jalapeño, finely chopped<br/>-1 cup of fresh corn kernels, from about 2 ears<br/>-1 avocado, cut into 1/2-inch pieces<br/>-1/2 cup fresh cilantro, chopped<br/>-Chips, for serving<br><b>DIRECTIONS</b><br/>In large bowl, whisk together lime juice, oil, garlic, and 1/2 teaspoon each salt and pepper. Toss with peas, tomatoes, scallions, yellow pepper, jalapeño, and corn. Refrigerate at least 30 minutes and up to 2 hours.", 
            tip:'predjelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:45,
            opisJela: "A healthy and hearty make-ahead dip, this recipe is the ultimate side dish to bring to your next potluck or backyard party. It's easy and inexpensive to put together, and your crowd will surely love it — just don’t forget the chips!"
          },
        {
          ime: "Summer rolls",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/predjela/letnjerolnice1.jpg",
          kratakOpis: "<b>INGREDIENTS</b><br/>For dipping sauce:<br/>-1/2 tablespoon of lime juice<br/>-1 tablespoon of rice vinegar<br/>-1/2 tablespoon of low sodium soy sauce<br/>-1 tablespoon of water<br/>-1 scallion, green part only, thinly sliced<br/>-1/2 tablespoon of maple syrup<br/><br/>-1/4 tablespoon of red pepper flakes<br/>For rolls:<br/>-8 rice paper (spring roll) wrappers<br/>-1/2 cup of baby greens (we used pac choi)<br/>-1 ripe avocado, sliced<br/>-1 scallion, cut into 4-inch matchsticks<br/>-1/4 of pineapple, peeled and cut into 4-inch matchsticks<br/>-1/2 of English cucumber, cut into 4-inch matchsticks<br/>-4 oz. green beans, trimmed and blanched<br/>-1/4 cup of fresh mint leaves<br/>-1/2 cup of pea shoots (about 1 oz)<br/><b>DIRECTIONS<b/><br>Make the sauce: In bowl, whisk together all ingredients.<br/>Assemble rolls: Fill pie plate or large bowl with warm water. Working quickly with one rice paper wrapper at a time, submerge in warm water until pliable, about 20 sec. Place on cutting board and arrange some of each filling ingredient in center.Fold wrapper sides in to seal, then fold base over filling and roll up to seal, being careful not to tear wrapper. Repeat with remaining wrappers and filling. Cut each roll in half and serve with dipping sauce.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:30,
          opisJela: "Turn an easy appetizer or dinner into a fun family activity with this summer rolls recipe — it’s a blast to make and even more enjoyable to eat! This Vietnamese restaurant staple is easy to make at home with store-bought rice paper wrappers, your favorite veggies, and an addictive dipping sauce."
        },
        {
          ime: "Easy red salsa",
          tezina: 2.0,
          ocena: 0.0,
          slika: "assets/recepti/predjela/lakacrvenasalsa1.jpg",
          /*treba dodati opis*/
          kratakOpis: "<b>INGREDIENTS</b><br/>-2 jalapeños (seeded for less heat if desired), finely chopped<br/>-1/2 small white onion, finely chopped<br/>-2 tablespoon of fresh lime juice<br/>-kosher salt and pepper<br/>-1/2 can fresh cilantro leaves, chopped<br/>-tortilla chips, for serving <br/><b>DIRECTIONS<b/><br>In large bowl, toss jalapeños and onion with lime juice, 1/2 teaspoon salt, and 1/4 teaspoon pepper; let sit 10 minutes. Toss with tomatoes, then fold in cilantro. Serve with tortilla chips.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:25,
          opisJela: "No need to buy salsa from the store ever again: This easy red salsa recipe is about to be your new go-to snack. Bright, fresh, and loaded with flavor, you'll want to load up on chips to serve this dip at every party (did someone say Cinco de Mayo?). Our (vegan!) salsa takes advantage of fresh tomatoes, spicy jalapeños, and plenty of cilantro for bold flavor. Top tip: Marinating the onions and jalapeños in lime juice will tame the raw bite while still keeping all of the taste that you love about these slightly spicy ingredients."
        }
      ];
    localStorage.setItem("listaRecepata", JSON.stringify(recepti));
    if (document != null)
      document.title = 'Početna';
  },
  mounted()
  {
    // postavljanje aktivne klase

    //this.eventBus.emit('promeniAktivanTab', 'pocetna');
  },
  beforeUnmount()
  {
    /*let stariAktivan = $(".aktivan-tab");
      stariAktivan.removeClass('aktivan-tab');*/ 
  }
}
</script>

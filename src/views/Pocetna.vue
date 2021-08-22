<template>
<Header/>
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
  <Footer></Footer>
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
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Pocetna',
  components: {
    Header,
    Footer,
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
          { id: 1,
            ime: "Kaubojski kavijar", 
            tezina:2.5, 
            ocena:0.0, 
            slika:"assets/recepti/predjela/kaubojskikavijar1.jpg", 
            kratakOpis:'<b>SASTOJCI</b> <br/>-trećina šolje soka od limuna <br/>-jedna kašičica maslinovog ulja <br/>-polovina jednog belog luka, izrendanog <br/>-košer so i biber <br/>-440 grama opranog crnog graška <br/>-230 grama kampari ili šljivastog paradajza <br/>-dva mlada luka iseckana<br/>-jedna žuta paprika iseckana<br/>-jedna veća halapinjo paprika iseckana<br/>-zrna kukuruza sa dva klipa kukuruza<br/>-jedan avokado iseckan na komade<br/>-polovina šoljice iseckanog korijandera<br/>-čips za serviranje <br><b>PRIPREMA</b><br/>U veću posudu staviti sve sastojke osim avokada i korijandera. Ostaviti u frižider na 30 minuta do 2 sata. Kasnije pri serviranju ubaciti avokado i korijander i služiti uz čips.', 
            tip:'predjelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:45,
            opisJela: "A healthy and hearty make-ahead dip, this recipe is the ultimate side dish to bring to your next potluck or backyard party. It's easy and inexpensive to put together, and your crowd will surely love it — just don’t forget the chips!",
            video: 'https://www.youtube.com/watch?v=M_5aVkzZaYw'
          },
        {
          id: 2,
          ime: "Letnje rolnice",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/predjela/letnjerolnice1.jpg",
          kratakOpis: "<b>SASTOJCI</b><br/>Za umak:<br/>-polovina šolje soka od limuna<br/>-jedna kašičica pirinčanog sirća<br/>-pola kašičice soja sosa<br/>-jedna kašičica vode<br/>-zeleni deo mladog luka tanko iseckan<br/>-pola kašičice javorovog sirupa<br/>-četvrtina kašičice tucane paprike<br/>Za rolnicu:<br/>-8 pirinčanih papira(wrap-ova)<br/>-polovina šoljice mladog zelenila<br/>-jedan avokado iseckan<br/>-jedan mladi luk iseckan na štapiće<br/>-četvrtina oljuštenog ananasa iseckanog na štapiće<br/>-polovina Engleskog krastavca iseckanog na štapiće<br/>-115 grama boranije<br/>-četvrtina šoljice listova sveže nane<br/>-polovina šoljice izdanka graška<br/><b>PRIPREMA<b/><br>Napravite sos: U činiji pomešajte sve sastojke. Napravite rolnice: Napunite veći tanjir ili činiju toplom vodom. Svaki pirinčani tanjir pre pravljenje rolnice ubacite u vodu na 20 sekundi. Ubacite štapićaste sastojke i obavijte ih listastim sastojcima. Presavijte strane tako da zapečate rolnicu, zatim preklopite bazu preko punjenja, smotajte ih da zapečatite, pazeći da ne pocepate papir. Ponovite isti proces za ostale rolnice. Rolnice podelite na pola i poslužite sa umakom.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:30,
          opisJela: "Turn an easy appetizer or dinner into a fun family activity with this summer rolls recipe — it’s a blast to make and even more enjoyable to eat! This Vietnamese restaurant staple is easy to make at home with store-bought rice paper wrappers, your favorite veggies, and an addictive dipping sauce.",
          video: 'https://www.youtube.com/watch?v=dYgRHTSdOGE'
        },
        {
          id: 3,
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
          opisJela: "No need to buy salsa from the store ever again: This easy red salsa recipe is about to be your new go-to snack. Bright, fresh, and loaded with flavor, you'll want to load up on chips to serve this dip at every party (did someone say Cinco de Mayo?). Our (vegan!) salsa takes advantage of fresh tomatoes, spicy jalapeños, and plenty of cilantro for bold flavor. Top tip: Marinating the onions and jalapeños in lime juice will tame the raw bite while still keeping all of the taste that you love about these slightly spicy ingredients.",
          video: 'https://www.youtube.com/watch?v=TfOQHUWM-_M'
        },
        {   id: 4,
            ime: "Rendani tofu 'Ćorizo' takos", 
            tezina:3.0, 
            ocena:0.0, 
            slika:"assets/recepti/glavnaJela/rendanitofu1.jpg", 
            kratakOpis:'<b>INGREDIENTS</b> <br/>For the cashew cream:<br/>-50 g cashews <br/>1/2 tsp. apple cider vinegar<br/>For the avocado cream:<br/>-2 small avocados, peeled and stoned<br/>juice 1 lime<br/>For the salsa(Pico de Gallo)<br/>150 g cherry tomatoes, roughly chopped<br/>1/2 of red onion, finely chopped<br/>-small handful coriander, finely chopped<br/>-juice 1 lime<br/>For the "Chorizo" filling<br/>-450 g extra firm tofu, we used The Tofoo Co.<br/>-1 tsp. dried oregano <br/>-1 tsp. ground coriander<br/>-1 tsp. paprika<br/>-1 tbsp. ground cumin<br/>-1/4 tsp. ground cloves<br/>-1 tsp. sugar<br/>-1 tsp. soy sauce<br/>-1/2 tsp. chipotle paste<br/>-3 tsp. vegetable oil<br/>-300 g chestnut mushrooms, finely chopped<br/>To serve:<br/>-12 corn tortillas, we used Cool Chile Company<br/><b>DIRECTIONS</b><br/>For the cashew cream, put the cashews into a small pan; cover with water. Bring to boil and simmer for 10min, until tender. Drain well, then blend in a high-speed blender with 70ml water and the apple cider vinegar until smooth. Set aside.<br/>For the avocado cream, whizz avocados, lime juice and some salt in the blender, until smooth and thick. Alternatively, mash the ingredients together in a bowl until smooth. Chill until needed.<br/>For the salsa, mix all the ingredients in a small bowl with some seasoning. Chill until needed.<br/>Next, make the filling. Coarsely grate the tofu, then dab with kitchen paper to dry. In a small bowl, mix the dried herbs and spices, sugar, soy sauce, chipotle paste and 4tbsp water.<br/>Heat 1tsp oil in a large non-stick frying pan over high heat. Add the mushrooms and fry until they start to brown and any moisture has evaporated, about 5-8min. Empty on to a plate. Add remaining oil to the pan and when hot, add the grated tofu. Fry for 8-10min, stirring occasionally, until starting to crisp up. Return mushrooms to the pan along with the spice mix. Cook for 2min.<br/>Meanwhile, lightly toast each tortilla in a hot, dry frying pan for about 20sec per side. Keep covered until ready to serve.<br/>To serve, spread each tortilla with a little avocado cream, top with ‘chorizo’ and salsa, and drizzle over cashew cream.', 
            tip:'glavno jelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:75,
            opisJela: "Grating the tofu allows it to crisp up in the pan quickly, while the mushrooms and spices give it a meaty flavour reminiscent of chorizo.",
            video: 'https://www.youtube.com/watch?v=WMpN0OfR2fw'
          },
        { id: 5,
          ime: "Fajita traybake",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/glavnaJela/fahita1.jpg",
          kratakOpis: "<b>INGREDIENTS</b><br/>-400 g beef rump steaks, about 2, excess fat trimmed<br/>-1 tbsp. sweet smoked paprika<br/>-2 tsp. ground cumin<br/>-1 tsp. garlic powder/granules<br/>-ground coriander<br/>-juice 2 limes<br/>-2 onions, finely sliced<br/>-2 mixed-colour peppers, deseeded and finely sliced<br/>-2 tbsp. vegetable oil<br/>-4 large ripe tomatoes, roughly chopped<br/>-2 g pouches microwave brown basmati rice<br/>-2 tbsp. soured cream<br/>-large handful coriander roughly chopped, to serve<br/><b>DIRECTIONS<b/><br>Slice the beef across the grain into 3⁄4cm-thick strips and mix in a non-metallic bowl with the spices, lime juice and 1tsp fine salt. Cover and chill for at least 30min (up to 6hr).<br/>Preheat oven to 200°C (180°C fan) mark 6. In a large roasting tin or ovenproof serving dish, mix the onions, peppers, oil and plenty of seasoning and cook in oven for 15min, until starting to soften. Stir in marinated beef and tomatoes, spreading to level. Return to oven for 15min.<br/>Remove tin/dish from oven and stir through the rice,breaking up any clumps with a fork. Return to oven for 5-10min, until rice is piping hot. Dollop over soured cream and sprinkle over coriander to serve.",
          tip:'glavno jelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:60,
          opisJela: "Easy and healthy Mexican main dish for lunch or dinner. It will make your day fullfiled.If you don’t fancy rice, serve inside warm wholemeal tortillas instead.",
          video: 'https://www.youtube.com/watch?v=M7ueHFxCRpQ'
        },
        { id: 6,
          ime: "Curried baked beans",
          tezina: 3.5,
          ocena: 0.0,
          slika: "assets/recepti/glavnaJela/karipecenipasulj1.jpg",
          /*treba dodati opis*/
          kratakOpis: "<b>INGREDIENTS</b><br/>-1 onion, finely chopped<br/>-2 tsp. olive oil<br/>-2 tbsp. medium curry powder<br/>2 g tins haricot beans, drained and rinsed<br/>-2 g tins chopped tomatoes<br/>-1 tsp. caster sugar<br/>-4 medium eggs<br/>-4 slices sourdough bread, toasted<br/>-4 tbsp. mango chutney<br/>-large handful coriander, roughly chopped, to serve<br/><b>DIRECTIONS<b/><br>Preheat oven to 200°C (180°C fan) mark 6. In a large roasting tin, mix onion, oil and curry powder. Roast for 15min, until onion has started to soften. Stir through beans, tomatoes, sugar and plenty of seasoning. Return to oven for 30min, stirring occasionally, until sauce is bubbling and has thickened slightly.<br/>When the beans are nearly ready, poach the eggs. Bring a large deep pan of water to the boil, then reduce to a simmer. Crack an egg into a ramekin or coffee cup, then neatly pour the egg into the simmering water. Working quickly, add a further 3 eggs in a similar fashion. Poach for 4min, or until, when lifted out with a slotted spoon, the whites feel firm but the yolks remain soft. Lift eggs out with a slotted spoon and drain on kitchen paper.<br/>Spread the mango chutney over the toasted sourdough. Top with beans, poached egg and a sprinkling of coriander. Serve.",
          tip:'glavno jelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:70,
          opisJela: "A recipe that’s easily scalable or divisible. Would make a delicious brunch too.Swap the haricot for mixed beans, if you like. Garnish with finely chopped red chilli if you fancy something a little spicier.",
          video: 'https://www.youtube.com/watch?v=X_2K2Fnr5H0'
        }
      ];

      let engleskiRecepti = [
          { id: 1,
            ime: "Cowboy caviar", 
            tezina:2.5, 
            ocena:0.0, 
            slika:"assets/recepti/kaubojskikavijar1.jpg", 
            kratakOpis:"<b>INGREDIENTS</b> <br/>-1/3 cup of lime juice<br/>-1 tablespoon of olive oil<br/>-1/2 clove garlic, grated<br/>-kosher salt and pepper<br/>-15.5 oz can of black-eyed peas, rinsed<br/>-1/2 lb. campari or plum tomatoes, cut into 1/4-inch pieces<br/>-2 scallions, finely chopped<br/>-1 yellow pepper, finely chopped<br/>-1 large jalapeño, finely chopped<br/>-1 cup of fresh corn kernels, from about 2 ears<br/>-1 avocado, cut into 1/2-inch pieces<br/>-1/2 cup fresh cilantro, chopped<br/>-Chips, for serving<br><b>DIRECTIONS</b><br/>In large bowl, whisk together lime juice, oil, garlic, and 1/2 teaspoon each salt and pepper. Toss with peas, tomatoes, scallions, yellow pepper, jalapeño, and corn. Refrigerate at least 30 minutes and up to 2 hours.", 
            tip:'predjelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:45,
            opisJela: "A healthy and hearty make-ahead dip, this recipe is the ultimate side dish to bring to your next potluck or backyard party. It's easy and inexpensive to put together, and your crowd will surely love it — just don’t forget the chips!",
            video: 'https://www.youtube.com/watch?v=M_5aVkzZaYw'

          },
        { id: 2,
          ime: "Summer rolls",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/predjela/letnjerolnice1.jpg",
          kratakOpis: "<b>INGREDIENTS</b><br/>For dipping sauce:<br/>-1/2 tablespoon of lime juice<br/>-1 tablespoon of rice vinegar<br/>-1/2 tablespoon of low sodium soy sauce<br/>-1 tablespoon of water<br/>-1 scallion, green part only, thinly sliced<br/>-1/2 tablespoon of maple syrup<br/><br/>-1/4 tablespoon of red pepper flakes<br/>For rolls:<br/>-8 rice paper (spring roll) wrappers<br/>-1/2 cup of baby greens (we used pac choi)<br/>-1 ripe avocado, sliced<br/>-1 scallion, cut into 4-inch matchsticks<br/>-1/4 of pineapple, peeled and cut into 4-inch matchsticks<br/>-1/2 of English cucumber, cut into 4-inch matchsticks<br/>-4 oz. green beans, trimmed and blanched<br/>-1/4 cup of fresh mint leaves<br/>-1/2 cup of pea shoots (about 1 oz)<br/><b>DIRECTIONS<b/><br>Make the sauce: In bowl, whisk together all ingredients.<br/>Assemble rolls: Fill pie plate or large bowl with warm water. Working quickly with one rice paper wrapper at a time, submerge in warm water until pliable, about 20 sec. Place on cutting board and arrange some of each filling ingredient in center.Fold wrapper sides in to seal, then fold base over filling and roll up to seal, being careful not to tear wrapper. Repeat with remaining wrappers and filling. Cut each roll in half and serve with dipping sauce.",
          tip:'predjelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:30,
          opisJela: "Turn an easy appetizer or dinner into a fun family activity with this summer rolls recipe — it’s a blast to make and even more enjoyable to eat! This Vietnamese restaurant staple is easy to make at home with store-bought rice paper wrappers, your favorite veggies, and an addictive dipping sauce.",
          video: 'https://www.youtube.com/watch?v=dYgRHTSdOGE'
        },
        { id: 3,
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
          opisJela: "No need to buy salsa from the store ever again: This easy red salsa recipe is about to be your new go-to snack. Bright, fresh, and loaded with flavor, you'll want to load up on chips to serve this dip at every party (did someone say Cinco de Mayo?). Our (vegan!) salsa takes advantage of fresh tomatoes, spicy jalapeños, and plenty of cilantro for bold flavor. Top tip: Marinating the onions and jalapeños in lime juice will tame the raw bite while still keeping all of the taste that you love about these slightly spicy ingredients.",
          video: 'https://www.youtube.com/watch?v=TfOQHUWM-_M'
        },
        {   id: 4,
            ime: "Rendani tofu 'Ćorizo' takos", 
            tezina:3.0, 
            ocena:0.0, 
            slika:"assets/recepti/glavnaJela/rendanitofu1.jpg", 
            kratakOpis:'<b>INGREDIENTS</b> <br/>For the cashew cream:<br/>-50 g cashews <br/>1/2 tsp. apple cider vinegar<br/>For the avocado cream:<br/>-2 small avocados, peeled and stoned<br/>juice 1 lime<br/>For the salsa(Pico de Gallo)<br/>150 g cherry tomatoes, roughly chopped<br/>1/2 of red onion, finely chopped<br/>-small handful coriander, finely chopped<br/>-juice 1 lime<br/>For the "Chorizo" filling<br/>-450 g extra firm tofu, we used The Tofoo Co.<br/>-1 tsp. dried oregano <br/>-1 tsp. ground coriander<br/>-1 tsp. paprika<br/>-1 tbsp. ground cumin<br/>-1/4 tsp. ground cloves<br/>-1 tsp. sugar<br/>-1 tsp. soy sauce<br/>-1/2 tsp. chipotle paste<br/>-3 tsp. vegetable oil<br/>-300 g chestnut mushrooms, finely chopped<br/>To serve:<br/>-12 corn tortillas, we used Cool Chile Company<br/><b>DIRECTIONS</b><br/>For the cashew cream, put the cashews into a small pan; cover with water. Bring to boil and simmer for 10min, until tender. Drain well, then blend in a high-speed blender with 70ml water and the apple cider vinegar until smooth. Set aside.<br/>For the avocado cream, whizz avocados, lime juice and some salt in the blender, until smooth and thick. Alternatively, mash the ingredients together in a bowl until smooth. Chill until needed.<br/>For the salsa, mix all the ingredients in a small bowl with some seasoning. Chill until needed.<br/>Next, make the filling. Coarsely grate the tofu, then dab with kitchen paper to dry. In a small bowl, mix the dried herbs and spices, sugar, soy sauce, chipotle paste and 4tbsp water.<br/>Heat 1tsp oil in a large non-stick frying pan over high heat. Add the mushrooms and fry until they start to brown and any moisture has evaporated, about 5-8min. Empty on to a plate. Add remaining oil to the pan and when hot, add the grated tofu. Fry for 8-10min, stirring occasionally, until starting to crisp up. Return mushrooms to the pan along with the spice mix. Cook for 2min.<br/>Meanwhile, lightly toast each tortilla in a hot, dry frying pan for about 20sec per side. Keep covered until ready to serve.<br/>To serve, spread each tortilla with a little avocado cream, top with ‘chorizo’ and salsa, and drizzle over cashew cream.', 
            tip:'glavno jelo',
            korisnikDodao: false,
            obrisan: false,
            trajanje:75,
            opisJela: "Grating the tofu allows it to crisp up in the pan quickly, while the mushrooms and spices give it a meaty flavour reminiscent of chorizo.",
            video: 'https://www.youtube.com/watch?v=WMpN0OfR2fw'
          },
        { id: 5,
          ime: "Fajita traybake",
          tezina: 3.3,
          ocena: 0.0,
          slika: "assets/recepti/glavnaJela/fahita1.jpg",
          kratakOpis: "<b>INGREDIENTS</b><br/>-400 g beef rump steaks, about 2, excess fat trimmed<br/>-1 tbsp. sweet smoked paprika<br/>-2 tsp. ground cumin<br/>-1 tsp. garlic powder/granules<br/>-ground coriander<br/>-juice 2 limes<br/>-2 onions, finely sliced<br/>-2 mixed-colour peppers, deseeded and finely sliced<br/>-2 tbsp. vegetable oil<br/>-4 large ripe tomatoes, roughly chopped<br/>-2 g pouches microwave brown basmati rice<br/>-2 tbsp. soured cream<br/>-large handful coriander roughly chopped, to serve<br/><b>DIRECTIONS<b/><br>Slice the beef across the grain into 3⁄4cm-thick strips and mix in a non-metallic bowl with the spices, lime juice and 1tsp fine salt. Cover and chill for at least 30min (up to 6hr).<br/>Preheat oven to 200°C (180°C fan) mark 6. In a large roasting tin or ovenproof serving dish, mix the onions, peppers, oil and plenty of seasoning and cook in oven for 15min, until starting to soften. Stir in marinated beef and tomatoes, spreading to level. Return to oven for 15min.<br/>Remove tin/dish from oven and stir through the rice,breaking up any clumps with a fork. Return to oven for 5-10min, until rice is piping hot. Dollop over soured cream and sprinkle over coriander to serve.",
          tip:'glavno jelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:60,
          opisJela: "Easy and healthy Mexican main dish for lunch or dinner. It will make your day fullfiled.If you don’t fancy rice, serve inside warm wholemeal tortillas instead.",
          video: 'https://www.youtube.com/watch?v=M7ueHFxCRpQ'
        },
        { id: 6,
          ime: "Curried baked beans",
          tezina: 3.5,
          ocena: 0.0,
          slika: "assets/recepti/glavnaJela/karipecenipasulj1.jpg",
          /*treba dodati opis*/
          kratakOpis: "<b>INGREDIENTS</b><br/>-1 onion, finely chopped<br/>-2 tsp. olive oil<br/>-2 tbsp. medium curry powder<br/>2 g tins haricot beans, drained and rinsed<br/>-2 g tins chopped tomatoes<br/>-1 tsp. caster sugar<br/>-4 medium eggs<br/>-4 slices sourdough bread, toasted<br/>-4 tbsp. mango chutney<br/>-large handful coriander, roughly chopped, to serve<br/><b>DIRECTIONS<b/><br>Preheat oven to 200°C (180°C fan) mark 6. In a large roasting tin, mix onion, oil and curry powder. Roast for 15min, until onion has started to soften. Stir through beans, tomatoes, sugar and plenty of seasoning. Return to oven for 30min, stirring occasionally, until sauce is bubbling and has thickened slightly.<br/>When the beans are nearly ready, poach the eggs. Bring a large deep pan of water to the boil, then reduce to a simmer. Crack an egg into a ramekin or coffee cup, then neatly pour the egg into the simmering water. Working quickly, add a further 3 eggs in a similar fashion. Poach for 4min, or until, when lifted out with a slotted spoon, the whites feel firm but the yolks remain soft. Lift eggs out with a slotted spoon and drain on kitchen paper.<br/>Spread the mango chutney over the toasted sourdough. Top with beans, poached egg and a sprinkling of coriander. Serve.",
          tip:'glavno jelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:70,
          opisJela: "A recipe that’s easily scalable or divisible. Would make a delicious brunch too.Swap the haricot for mixed beans, if you like. Garnish with finely chopped red chilli if you fancy something a little spicier.",
          video: 'https://www.youtube.com/watch?v=X_2K2Fnr5H0'
        }
      ];
    let jezik = "srpski";
    localStorage.setItem("jezik", jezik);
    localStorage.setItem("listaRecepata", JSON.stringify(recepti));
    localStorage.setItem("engleskiRecepti", JSON.stringify(engleskiRecepti));
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

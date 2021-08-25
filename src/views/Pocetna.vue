<template v-if="show == true">
  <div>
    <div v-if="this.jezik == 'srpski'">
      <Header @osveziJezik="promenaJezika()"/>
      <div class="row">
        <div class="col">
          <h2 id="top-3-recepta">Top 3 recepta</h2>
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
      <Footer></Footer>
      <div/>
    </div>
    <div v-else>
      <Header @osveziJezik="promenaJezika()"/>
      <div class="row">
        <div class="col">
          <h2 id="top-3-recepta">Top 3 recipes</h2>
        </div>  
      </div>
      <div class="row">
        <div class="col-12">
          <SlideshowRecepti/>
        </div>
      </div>
      <hr class="linija">
      <div id="blogovi">
        <h1 id="header-blogovi">Recommended blogs</h1>
        <Blogovi/>
      </div>
      <hr class="linija">
      <div id="kulinarski-kursevi">
        <h1 id="header-kulinarski-kursevi">Culinary courses</h1>
        <KursKuvanja/>
      </div>
      <hr class="linija">
      <div id="baneri">
        <h1>Our sponsors</h1>
        <Baneri/>
      </div>
      <Footer></Footer>
      <div/>
    </div>
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
  data() {
    return {
      show: true,
      jezik: ''
    }
  },
  methods: {
    promenaJezika() {
            window.location.reload();
            let jezik = localStorage.getItem("jezik");
        },
  },
  created(){
    
    if(localStorage.getItem("jezik") != null)
        {
          this.jezik = localStorage.getItem("jezik");
        }
    else
        {
          this.jezik = 'srpski';
          localStorage.setItem('jezik', 'srpski');
        }

    //if (localStorage.getItem("listaRecepata") != null) {
      //localStorage.removeItem("listaRecepata");
    //}
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
            video: 'https://www.youtube.com/watch?v=M_5aVkzZaYw',
            komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=dYgRHTSdOGE',
          komentari: [],
          ocene: []
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
          video: 'https://www.youtube.com/watch?v=TfOQHUWM-_M',
          komentari: [],
          ocene: []
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
            video: 'https://www.youtube.com/watch?v=WMpN0OfR2fw',
            komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=M7ueHFxCRpQ',
          komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=X_2K2Fnr5H0',
          komentari: [],
            ocene: []
        },
        {
          id: 7,
          ime: "Energetske pločice",
          tezina: 4.1,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b>SASTOJCI</b></br>200 g zobenih pahuljica</br>50 g semenki suncokreta</br>70 g listića badema</br>30 g pšeničnih klica</br>150 g cvetnog meda</br>40 g smeđeg šećera</br>30 g maslaca</br>1 vanilin šećer</br>prstohvat soli</br>200 g naseckanog suvog voća (trešnja, brusnica, ...)</br></br></br><b>PRIPREMA<b></br>1. Pomiešajte zobene pahuljice, semenke suncokreta, listiće badema i pšenične klice.</br>2. Rasporedite ih u tankom sloju u tepsiji i pecite u rerni zagrejanoj na 180°C 10-15 minuta uz povremeno mešanje.</br>3. U međuvremenu med, šećer, maslac, vanilin šećer i so zagrejte i kuvajte na laganoj vatri uz mešanje dok se šećer ne otopi.</br>4. Smesi iz rerne dodajte narezano suvo voće i promešajte, pa sipajte u tekuću smesu.</br>5. Brzo promešajte i istresite u posudu za pečenje (28x20 cm) obloženu papirom za pečenje. Mokrim rukama ili pomoću papira za pečenje smesu poravnajte i pritisnite. </br>6. Pecite u pećnici zagrejanoj na 150°C oko 25 minuta.</br>",
          tip:'uzina',
          korisnikDodao: false,
          obrisan:false,
          trajanje: 60,
          opisJela: "Koliko snage sadržano u malom štapiću.</br>Koncentrisani ugljeni hidrati brzo će vam vratiti izgubljenu snagu, a suvo voće će dopuniti ukus zdravih semenki.",
          video:'https://www.youtube.com/watch?v=isHZFjJ0pwo',
          komentari: [],
            ocene: []
        },
        {
          id: 8,
          ime: "Smoothie sa crnim susamom",
          tezina: 1.2,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b>SASTOJCI</b></br>50 grama crnog susama</br>2 zrele banane</br>60 ml sojinog mleka ili mleko po vasem izboru</br>65 grama kefira</br>1 kašičica javorovog sirupa</br>4-6 kockica leda</br></br></br><b>PRIPREMA</b></br>1. U suvom tiganju na srednjoj temperaturi propecite crni susam dok malo zamirise. Neka se malo rashladi pa ga sameljite u mlinu za zacine.</br>2. Stavite sve sastojke, zajedno sa samlevenim susamom u blender i blendirajte. Prilagodite gustinu smoothija dodajuci mleko.</br>3. Po zelji, sipajte smoothie u rashlađene čaše.</br>",
          tip: 'uzina',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 20,
          opisJela: "Jako fin smoothie iz knjige Dr-a Andrew Weil 'Brza Hrana Zdrava Hrana'",
          video: 'https://www.youtube.com/watch?v=3MItsAsSZq8',
          komentari: [],
            ocene: []
        },
        {
          id: 9,
          ime: "Zimski voćni hleb",
          tezina: 2.8,
          ocena: 0.0,
          slika: [],
          kratakOpis:"<b>SASTOJCI</b></br>125 g bundeve, narendane</br>250 g jabuka, narendanih</br>100 g braon šećera</br>50 g suvih brusnica ili suvih šljiva</br>100 g suvog grožđa</br>1 kašika soka ili sirupa od jabuke</br>2 kašike voćnog likera</br>50 g seckanih lešnika, badema, oraha (može i više)</br>250 g integralnog brašna</br>pola kesice praška za pecivo</br>1/3 ili 1/2 kašičice cimeta</br>pola kašičice đumbira u prahu</br>1/3 kašičice mlevenog karanfilića, klinčića </br>na vrh noža kardamoma</br></br></br><b>PRIPREMA</b>1. Bundevu i jabuke oljuštimo i narendamo na krupno rende. Pomešamo sa šećerom i brusnicama.</br></br>2. U lončetu na srednjoj temperaturi zagrejemo sok i voćni liker ( koristila sam 'Kruškovac' ali i vodu u zamenu kad sam htela potpuno zdravu verziju) pa dodamo suvo grožđe i lešnik. Sipamo u narendano voće, promešamo i ostavimo u frižider najmanje sat vremena, a može i preko noći.</br></br>3. Brašno pomešamo s praškom za pecivo i začinima pa postepeno dodajemo u smesu od voća i zamesimo testo.<br></br>4. Od testa napravimo dve vekne, stavimo u kalup obložen pek papirom, premažemo žumancetom i pospemo seckanim bademima. Pečemo u zagrejanoj rerni na 170*C oko 45 minuta. Najbolje je vreme pečenja prilagoditi rerni.</br></br>5. Hlepčić ostaje svež dugo, idealan je kao doručak uz šolju čaja ili kao zdrava poslastica, užina.</br></br>6. Može biti izuzetno lep poklon upakovan u celofan i vezan na krajevima kao bombona. Ne zaboravite da dodate neko dugme ili perlicu na krajeve mašne, pa deo čipkanog papira za torte preko sredine.</br>",
          tip: 'uzina',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 40,
          opisJela: "Više od pola kilograma različitog voća i samo četvrt kile brašna, integralnog.</br>Potpuno zdravo, a i posno ako se izbaci par sastojaka.</br>Dobra užina, početak dana ili poklon.",
          video: 'https://www.youtube.com/watch?v=cH13RFjI2Vw',
          komentari: [],
            ocene: []
        },
        {
          id: 10,
          ime: "Banoffee desert",
          tezina: 2.5,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b>SASTOJCI</b></br>8-10 keksa</br>2 banane</br>200 ml slatkog vrhnja za slag</br>80 gr krem-sira</br>1 supena kasika vrhom puna, dulce de leche</br>(eventualno kakao prah za posipanje)</br></br></br><b>PRIPREMA<b></br>1. Koristite vama omiljenu vrstu keksa ili sta imate. Trebace vam otprilike desetak keksića, smrvite ih prstima ili stavite u kesu pa pređite oklagijom preko njih dok se ne usitne. </br></br>2. Dve banane izrežite na kolutove. Krem-sir, pavlaku i dulce de leche izmiksajte kratko dok se ne zgusne.</br></br>3. Slažite u čaše slojeve keksa, banane i kreme, po svom ukusu tako da desert izgleda dekorativno. Moje čaše su zapremine 2 dl, i bile su vrhom pune, a vi mozete koristiti i veće.</br></br>4. Po vrhu pospite mlevenim keksom, kakao prahom ili po svom ukusu. Voila!</br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 10,
          opisJela: "Ovaj desert je jako jednostavan i gotov za 10 minuta, a u ukus je fantasticno karamelkast, sa crunchy keksom i bananom.",
          video: 'https://www.youtube.com/watch?v=jbPR2SJuFHg',
          komentari: [],
            ocene: []
        },
        {
          id: 11,
          ime: "Čoko-Maskarpone Desert",
          tezina: 2.7,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b>SASTOJCI</b></br>Cokoladna smesa:</br>200 ml pavlake za kuvanje</br>150 g čokolade</br>150 g mlevenog keksa</br>50 g sitno seckanih badema</br>Sir smesa:</br>250 g maskarpone sira</br>50 g kisele pavlake</br>2 vanilin sećera</br>30 g sitno seckane čokolade</br></br></br><b>PRIPREMA</b></br>1. Prvo pripremiti čokoladnu smesu:</br></br>Pavlaku staviti da se zagreje, skloniti sa šporeta i dodati mu sitno seckanu čokoladu i mešati celo vreme da se sva čokolada istopi.</br></br>Dodati sad mleveni keks, bademe, dobro izmešati i ostaviti da se ohladi.</br></br>2. Sir smesa: </br></br>Sve sastojke sjediniti, sitno seckanu čokoladu isto, dobro izmešati da se dobije fina, kremasta smesa.</br></br>3. 4 case pripremiti od 2 dl.</br></br>Puniti naizmenično prvo čokoladnu smesu, pa sir smesu i sve tako dok se ne utroše sastojci.</br></br>4. Po želji ukrasiti sa čokoladnim mrvicama.</br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 20,
          opisJela: "Fantasticno i cokoladno!",
          video: 'https://www.youtube.com/watch?v=XS6Q7xc8TWA',
          komentari: [],
            ocene: []
        },
        {
          id: 12,
          ime: "Nestle Dessert Brownie",
          tezina: 3.4,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b>SASTOJCI</b></br>160 g Nestlé Dessert Corse čokolade 64% kakaa</br>160 g maslaca</br>200 g šećera u prahu</br>1 kom vanilin šećer ili kašičica arome vanile</br>3 kom jaja</br>105 g glatkog brašna</br>prstohvat soli</br>80 g Nestlé Dessert Noir čokolade 52% kakaa</br></br></br><b>PRIPREMA</b></br>1. Rernu zagrejati na 165 stepeni. Kalup obložiti papirom za pečenje. </br>Rastopiti 160 g čokolade i maslac, pa prohladiti.</br> Izmiksati jaja sa šećerom i vanilom, kada se nakon nekoliko minuta zapeni, ručno umešajte čokoladu s maslacem, zatim prosejano brašno i so i na kraju čokoladu narezanu na kockice (mogu umesto čokolade sitno seckani bademi, orasi, lešnici...).</br></br>2. Uliti u kalup i peći u prethodno zagrejanoj rerni 30-35 minuta </br>Po želji ukrasiti šećerom u prahu ili prošarati rastopljenom čokoladom.</br></br>3. Ja sam prošarala rastopljenom čokoladom (malo mlečne, malo tamne čokolade, malo slatke pavlake i mrvicu maslaca)</br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 45,
          opisJela: "Prefini brownies! Recept je iz časopisa Lisa.",
          video: 'https://www.youtube.com/watch?v=6OuJzGA0Umg',
          komentari: [],
            ocene: []
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
            video: 'https://www.youtube.com/watch?v=M_5aVkzZaYw',
            komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=dYgRHTSdOGE',
          komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=TfOQHUWM-_M',
          komentari: [],
            ocene: []
        },
        { id: 4,
          ime: "Grated tofu 'Choriso' tacos", 
          tezina:3.0, 
          ocena:0.0, 
          slika:"assets/recepti/glavnaJela/rendanitofu1.jpg", 
          kratakOpis:'<b>INGREDIENTS</b> <br/>For the cashew cream:<br/>-50 g cashews <br/>1/2 tsp. apple cider vinegar<br/>For the avocado cream:<br/>-2 small avocados, peeled and stoned<br/>juice 1 lime<br/>For the salsa(Pico de Gallo)<br/>150 g cherry tomatoes, roughly chopped<br/>1/2 of red onion, finely chopped<br/>-small handful coriander, finely chopped<br/>-juice 1 lime<br/>For the "Chorizo" filling<br/>-450 g extra firm tofu, we used The Tofoo Co.<br/>-1 tsp. dried oregano <br/>-1 tsp. ground coriander<br/>-1 tsp. paprika<br/>-1 tbsp. ground cumin<br/>-1/4 tsp. ground cloves<br/>-1 tsp. sugar<br/>-1 tsp. soy sauce<br/>-1/2 tsp. chipotle paste<br/>-3 tsp. vegetable oil<br/>-300 g chestnut mushrooms, finely chopped<br/>To serve:<br/>-12 corn tortillas, we used Cool Chile Company<br/><b>DIRECTIONS</b><br/>For the cashew cream, put the cashews into a small pan; cover with water. Bring to boil and simmer for 10min, until tender. Drain well, then blend in a high-speed blender with 70ml water and the apple cider vinegar until smooth. Set aside.<br/>For the avocado cream, whizz avocados, lime juice and some salt in the blender, until smooth and thick. Alternatively, mash the ingredients together in a bowl until smooth. Chill until needed.<br/>For the salsa, mix all the ingredients in a small bowl with some seasoning. Chill until needed.<br/>Next, make the filling. Coarsely grate the tofu, then dab with kitchen paper to dry. In a small bowl, mix the dried herbs and spices, sugar, soy sauce, chipotle paste and 4tbsp water.<br/>Heat 1tsp oil in a large non-stick frying pan over high heat. Add the mushrooms and fry until they start to brown and any moisture has evaporated, about 5-8min. Empty on to a plate. Add remaining oil to the pan and when hot, add the grated tofu. Fry for 8-10min, stirring occasionally, until starting to crisp up. Return mushrooms to the pan along with the spice mix. Cook for 2min.<br/>Meanwhile, lightly toast each tortilla in a hot, dry frying pan for about 20sec per side. Keep covered until ready to serve.<br/>To serve, spread each tortilla with a little avocado cream, top with ‘chorizo’ and salsa, and drizzle over cashew cream.', 
          tip:'glavno jelo',
          korisnikDodao: false,
          obrisan: false,
          trajanje:75,
          opisJela: "Grating the tofu allows it to crisp up in the pan quickly, while the mushrooms and spices give it a meaty flavour reminiscent of chorizo.",
          video: 'https://www.youtube.com/watch?v=WMpN0OfR2fw',
          komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=M7ueHFxCRpQ',
          komentari: [],
            ocene: []
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
          video: 'https://www.youtube.com/watch?v=X_2K2Fnr5H0',
          komentari: [],
            ocene: []
        },
        {
          id: 7,
          ime: "Energy bars",
          tezina: 4.1,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b> INGREDIENTS </b> </br>200 g oatmeal </br>50 g sunflower seeds </br>70 g almond leaves </br>30 g wheat germ </br>150 g of flower honey </br>40 g brown sugar </br>30 g butter </br>1 vanilla sugar </br>pinch of salt </br>200 g of chopped dried fruit (cherry, cranberry, ...) </br></br></br><b> PREPARATION <b> </br>1. Mix oatmeal, sunflower seeds, almond leaves and wheat germ. </br>2. Arrange them in a thin layer in a baking pan and bake in an oven preheated to 180 ° C for 10-15 minutes, stirring occasionally. </br>3. Meanwhile, heat the honey, sugar, butter, vanilla sugar and salt and cook over low heat, stirring, until the sugar dissolves. </br>4. Add sliced ​​dried fruit to the oven mixture and stir, then pour into the liquid mixture. </br>5. Stir quickly and pour into a baking dish (28x20 cm) lined with baking paper. Flatten and press the mixture with wet hands or baking paper. </br>6. Bake in an oven preheated to 150 ° C for about 25 minutes. </br>",
          tip:'uzina',
          korisnikDodao: false,
          obrisan:false,
          trajanje: 60,
          opisJela: "How much power is contained in a small stick.</br>Concentrated carbohydrates will quickly restore your lost strength, and dried fruit will complement the taste of healthy seeds.",
          video:'https://www.youtube.com/watch?v=isHZFjJ0pwo',
          komentari: [],
            ocene: []
        },
        {
          id: 8,
          ime: "Black sesame smoothie",
          tezina: 1.2,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b> INGREDIENTS </b> </br>50 grams of black sesame </br>2 ripe bananas </br>60 ml of soy milk or milk of your choice </br>65 grams of kefir </br>1 teaspoon maple syrup </br>4-6 ice cubes </br></br></br><b> PREPARATION </b> </br>1. In a dry pan on medium heat, fry the black sesame seeds until slightly fragrant. Let it cool a bit and grind it in a spice grinder. </br>2. Put all the ingredients, together with the ground sesame seeds in a blender and blend. Adjust the density of the smoothie by adding milk. </br>3. If desired, pour the smoothie into chilled glasses. </br>",
          tip: 'uzina',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 20,
          opisJela: "Very nice smoothie from Dr. Andrew Weil's book 'Fast Food Healthy Food'",
          video: 'https://www.youtube.com/watch?v=3MItsAsSZq8',
          komentari: [],
            ocene: []
        },
        {
          id: 9,
          ime: "Winter Fruit Bread",
          tezina: 2.8,
          ocena: 0.0,
          slika: [],
          kratakOpis:"<b> INGREDIENTS </b> </br>125 g pumpkin, grated </br>250 g of apples, grated </br>100 g brown sugar </br>50 g of dried cranberries or prunes </br>100 g of raisins </br>1 tablespoon apple juice or syrup </br>2 tablespoons fruit liqueur </br>50 g chopped hazelnuts, almonds, walnuts (maybe more) </br>250 g of wholemeal flour </br>half a bag of baking powder </br>1/3 or 1/2 teaspoon cinnamon </br>half a teaspoon of ginger powder </br>1/3 teaspoon ground cloves, cloves </br>on top of a cardamom knife </br></br> </br><b> PREPARATION </b></br>1. Peel a pumpkin and apples and grate them on a large grater. Mix with sugar and cranberries. </br></br>2. Heat the juice and fruit liqueur in a pot at a medium temperature (I used 'Kruškovac' but also water in exchange when I wanted a completely healthy version) and add raisins and hazelnuts. Pour in the grated fruit, stir and leave in the fridge for at least an hour time, and maybe overnight. </br></br>3. Mix the flour with the baking powder and spices, then gradually add to the fruit mixture and knead the dough. <br></br>4. Make two loaves of dough, put them in a mold lined with baking paper, coat with egg yolk and sprinkle with chopped almonds. Bake in a preheated oven at 170 ° C for about 45 minutes. It is best to adjust the baking time to the oven. </br></br>5. Bread stays fresh for a long time, it is ideal as breakfast with a cup of tea or as a healthy dessert, snack. </br></br>6. It can be an extremely beautiful gift wrapped in cellophane and tied at the ends like candy. Don't forget to add a button or bead to the ends of the bow, then a piece of lace cake paper in the middle. </br>",
          tip: 'uzina',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 40,
          opisJela: "More than half a kilo of different fruits and only a quarter of a kilo of flour, integral. </br> Completely healthy, and also lean if a couple of ingredients are thrown out. </br> A good snack, the beginning of the day or a gift.",
          video: 'https://www.youtube.com/watch?v=cH13RFjI2Vw',
          komentari: [],
            ocene: []
        },
        {
          id: 10,
          ime: "Banoffee desert",
          tezina: 2.5,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b> INGREDIENTS </b> </br>8-10 biscuits </br>2 bananas </br>200 ml of sweet whipping cream </br>80 g cream cheese </br>1 tablespoon top full, dulce de leche </br>(possibly cocoa powder for sprinkling) </br></br></br><b> PREPARATION <b> </br>1. Use your favorite type of cookie or whatever you have. You will need about a dozen biscuits, crush them with your fingers or put them in a bag and roll them over until they are finely chopped. </br></br>2. Cut two bananas into rings. Cream cheese, sour cream and dulce de leche mix briefly until thickened. </br></br>3. Arrange layers of biscuits, bananas and cream in glasses, according to your taste, so that the dessert looks decorative. My glasses are 2 dl in volume, and they were full at the top, and you can use bigger ones. </br></br>4. Sprinkle the top with ground biscuits, cocoa powder or to taste. Voila! </br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 10,
          opisJela: "This dessert is very simple and ready in 10 minutes, and tastes fantastically caramel, with crunchy biscuits and bananas.",
          video: 'https://www.youtube.com/watch?v=jbPR2SJuFHg',
          komentari: [],
            ocene: []
        },
        {
          id: 11,
          ime: "Chocolate Mascarpone Dessert",
          tezina: 2.7,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b> INGREDIENTS </b> </br>Chocolate mixture: </br>200 ml of cooking sour cream </br>150 g of chocolate </br>150 g ground biscuits </br>50 g finely chopped almonds </br>Cheese mixture: </br>250 g mascarpone cheese </br>50 g sour cream </br>2 vanilla sugar </br>30 g finely chopped chocolate </br></br></br><b> PREPARATION </b> </br>1. First prepare the chocolate mixture: </br></br>Put the sour cream to heat, remove from the stove and add finely chopped chocolate and stir all the time to melt all the chocolate. </br></br>Now add ground biscuits, almonds, mix well and leave to cool. </br></br>2. Cheese mixture: </br></br>Combine all ingredients, finely chopped chocolate as well, mix well to get a fine, creamy mixture. </br></br>3. Prepare 4 glasses of 2 dl. </br></br>Fill alternately the chocolate mixture first, then the cheese mixture and so on until the ingredients are used up. </br></br>4. Garnish with chocolate crumbs if desired. </br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 20,
          opisJela: "Fantastic and chocolatey!",
          video: 'https://www.youtube.com/watch?v=XS6Q7xc8TWA',
          komentari: [],
            ocene: []
        },
        {
          id: 12,
          ime: "Nestle Dessert Brownie",
          tezina: 3.4,
          ocena: 0.0,
          slika: [],
          kratakOpis: "<b> INGREDIENTS </b> </br>160 g Nestlé Dessert Corse chocolate 64% cocoa </br>160 g butter </br>200 g of powdered sugar </br>1 pc vanilla sugar or a teaspoon of vanilla flavor </br>3 eggs </br>105 g of smooth flour </br>pinch of salt </br>80 g Nestlé Dessert Noir chocolate 52% cocoa </br></br></br><b> PREPARATION </b> </br>1. Preheat oven to 165 degrees. Line the mold with baking paper. </br>Melt 160 g of chocolate and butter, then cool. </br>Mix eggs with sugar and vanilla, when it froths after a few minutes, mix the chocolate with butter by hand, then sifted flour and finally diced chocolate (you can finely chopped almonds, walnuts, hazelnuts instead of chocolate ...). br></br>2. Pour into a mold and bake in a preheated oven for 30-35 minutes </br>Garnish with powdered sugar or sprinkle with melted chocolate if desired. </br></br>3. I sprinkled with melted chocolate (a little milk, a little dark chocolate, a little sweet sour cream and a crumb of butter) </br>",
          tip: 'desert',
          korisnikDodao: false,
          obrisan: false,
          trajanje: 45,
          opisJela: "Awesome brownies! Recipe is taken from magazine 'Lisa'.",
          video: 'https://www.youtube.com/watch?v=6OuJzGA0Umg',
          komentari: [],
            ocene: []
        }
      ];

    let id = 13;
    if (localStorage.getItem("staticId") == null)
      localStorage.setItem("staticId", id);
    let jezik = "srpski";
    if(localStorage.getItem("jezik") == null)
      localStorage.setItem("jezik", jezik);
    if (localStorage.getItem("listaRecepata") == null) {
      localStorage.setItem("listaRecepata", JSON.stringify(recepti));
      localStorage.setItem("engleskiRecepti", JSON.stringify(engleskiRecepti));
    }
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

<template>
<Header @osveziJezik="promenaJezika()"></Header>
    <div v-if="this.jezik == 'srpski'">
        <div class="naslov">
            <h2>O nama</h2>
        </div>
        <hr>
        <div class="informacije">Ovaj sajt je napravljen sa željom da ljudi međusobno dele recepte, pronađu recepte za nova 
            i ukusna jela koja će im dane učiniti zanimljivim, a život zdravijim i uzbudljivim. Znate kako se govori da žeiš biti
            najbolji u onome što radiš, moraš pre svega da voliš i uživaš u tome. Naš moto je malo drugačiji:"Da bi bio najbolji,
            moraš da jedeš ono što voliš i u čemu uživaš". To nam je i bila misija, da podstaknemo ljude, mlade i stare, muškarce
            i žene, da jedu domaću hranu i da se hrane zdravije. Mislim da smo u tome i uspeli, a o tome govore brojne nagrade koje smo
            osvojili: - "Najbolji sajt sa kuvarskom tematikom" za Jugoistočnu Evropu, osvojena tri puta zaredom(2018,2019,2020)
                      - "Medalja za podsticaj Srbije na zdrav život" dobijena 2019. godine,
                      - "Najveći kuvar" na nivou Balkana, najveća skupina različitih recepata na celom Balkanu, osvojena dvaput
                      zaredom(2019,2020)
        </div>

        <div class="map-responsive">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9695566671926!2d20.4899555757406!3d44.80180906051903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a83a8e24805%3A0x944fd38de78342d7!2z0KLRgNGI0ZvQsNC90YHQutCwIDIwLCDQkdC10L7Qs9GA0LDQtCAxMTEyMA!5e0!3m2!1ssr!2srs!4v1625665651783!5m2!1ssr!2srs" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div> 
        <hr>

        <div class="kontakt">
            <div class="kontaktNaslov">
                <h4>Kontakt informacije</h4>
            </div>
            <div class="kontaktInformacije">
                Naša centrala je locirana u Tršćanskoj ulici, broj 20.
                <br>
                Broj naše centrale - <b>061 387 562</b> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                <br>
                Broj naše tehničke podrške - <b>061 444 121</b> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
            </div>

        </div> 

    </div>
    <div v-else>
        <div class="naslov">
            <h2>About us</h2>
        </div>
        <hr>
        <div class="informacije">This website was made with purpose of people sharing their recipes, find recipes for new 
            and delicious meals which will make their day more interesting and their life healthier and more exciting. You know the old saying - If you wanna be
            the best in what you do, you must therefore love and enjoy doing it. Our moto is a little bit different:"To be the best, you need to eat what you enjoy and love".
            That was indeed our mission, to encourage people, younger and older, men and women, to eat homemade food and diet healthier.
            I think we succeeded in that, and the best teller are our many awards and acomplishments we have:
                      - "The best website with cooking theme" for Southeastern Europe, achieved three times in a row(2018,2019,2020)
                      - "Medal for encouraging Serbian people on healthy lifestyle" won in year 2019,
                      - "The largest cookbook" in the Balkan, the biggest aggregate of different recipes in the Balkan, achieved twice in a row(2019,2020)
        </div>

        <div class="map-responsive">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9695566671926!2d20.4899555757406!3d44.80180906051903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a83a8e24805%3A0x944fd38de78342d7!2z0KLRgNGI0ZvQsNC90YHQutCwIDIwLCDQkdC10L7Qs9GA0LDQtCAxMTEyMA!5e0!3m2!1ssr!2srs!4v1625665651783!5m2!1ssr!2srs" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

        </div> 
        <hr>

        <div class="kontakt">
            <div class="kontaktNaslov">
                <h4>Contact information</h4>
            </div>
            <div class="kontaktInformacije">
                Our central is located in Tršćanska street, number 20.
                <br>
                Number of our central - <b>061 387 562</b> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                <br>
                Number of our technical support - <b>061 444 121</b> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
            </div>

        </div> 

    </div>
    <Footer></Footer>
</template>

<style>

</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Header,
        Footer
    },
     name: 'ONama',
     data() {
         return {
             jezik:''
         }
     },
    created(){
        this.jezik = localStorage.getItem("jezik");
    },
    methods: {
        promenaJezika() {
            window.location.reload();
            let jezik = localStorage.getItem("jezik");
        }
    }
}
</script>
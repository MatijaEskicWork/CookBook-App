<template>
<div v-if="this.jezik == 'srpski'">
    <Header @osveziJezik="promenaJezika()"></Header>
    <div>
        <div class="glavno">
            <div class="row">
                <div class="col-lg-6 col-12 info">
                    <h1 id="naziv-recepta">{{mojRecept.ime}}</h1>
                    <table class="table table-borderless tabela-opste-informacije">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <b>Trajanje:</b> </td>
                                <td>{{mojRecept.trajanje}} min</td>
                            </tr>
                            <tr>
                                <td><b>Težina: </b></td>
                                <td>{{mojRecept.tezina}}</td>
                            </tr>
                            <tr>
                                <td><b>Prosečna ocena:</b></td>
                                <td>{{prosecnaOcena}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span><b>Ocena:</b></span>        
                                </td>
                                <td>
                                    <div class="form-group ocene">
                                        <select class="form-control" id="moguceOcene">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><button class="btn btn-outline-success" id="dugme-unesi-ocenu" @click="unesiOcenu()">Unesi ocenu</button></td>
                                <td><button class="btn btn-outline-secondary" id="dugme-pdf" @click="skiniPDF()">Sačuvaj recept</button></td>
                            </tr>
                        </tbody>
                    </table>      
                </div>
                <div class="col-lg-6 col-12">
                    <div id="carouselSlikeRecepta h-100" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" :src="dohvatiSliku('1.jpg')" alt="First slide">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Način pripreme</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12" id="tekst-recepta">
                <!--<span>{{mojRecept.kratakOpis}}</span>-->
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Video uputstvo za pripremu</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 col-12">
                <div class="iframe-container">
                    <iframe id="video" :src="napraviEmbeddedUrl(mojRecept.video)" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Ostavite komentar</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <textarea class="form-control" id="moj-komentar" rows="3" placeholder="Komentar..."></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button id="btn-unesi-komentar" class="btn btn-outline-success" @click="unesiKomentar()">Unesi komentar</button>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Svi komentari</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div id="koment-sekcija">
                    <div v-for="(komentar, index) in mojRecept.komentari" :key="index" class="komentar">
                        <p>{{komentar.komentar}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <Footer></Footer>
</div>
<div v-else>
    <Header @osveziJezik="promenaJezika()"></Header>
    <div>
        <div class="glavno">
            <div class="row">
                <div class="col-lg-6 col-12 info">
                    <h1 id="naziv-recepta">{{mojRecept.ime}}</h1>
                    <table class="table table-borderless tabela-opste-informacije">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <b>Duration:</b> </td>
                                <td>{{mojRecept.trajanje}} min</td>
                            </tr>
                            <tr>
                                <td> <b>Difficulty: </b></td>
                                <td>{{mojRecept.tezina}}</td>
                            </tr>
                            <tr>
                                <td> <b>Average rating:</b></td>
                                <td>{{prosecnaOcena}}</td>
                            </tr>
                            <tr>
                                <td>
                                    <span><b>Rate:</b></span>        
                                </td>
                                <td>
                                    <div class="form-group ocene">
                                        <select class="form-control" id="moguceOcene">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><button class="btn btn-outline-success" id="dugme-unesi-ocenu" @click="unesiOcenu()">Enter the rating</button></td>
                                <td><button class="btn btn-outline-secondary" id="dugme-pdf" @click="skiniPDF()">Save recipe</button></td>
                            </tr>
                        </tbody>
                    </table>      
                </div>
                <div class="col-lg-6 col-12">
                    <div id="carouselSlikeRecepta h-100" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" :src="dohvatiSliku('1.jpg')" alt="First slide">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Preparation</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12" id="tekst-recepta">
                <!--<span>{{mojRecept.kratakOpis}}</span>-->
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Video tutorial</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-10 col-12">
                <div class="iframe-container">
                    <iframe id="video" :src="napraviEmbeddedUrl(mojRecept.video)" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>Leave a comment</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <textarea class="form-control" id="moj-komentar" rows="3" placeholder="Komentar..."></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <button id="btn-unesi-komentar" class="btn btn-outline-success" @click="unesiKomentar()">Enter the comment</button>
            </div>
        </div>
        <hr class="linija">
        <div class="row">
            <div class="col-12">
                <h2>All comments</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div id="koment-sekcija">
                    <div v-for="(komentar, index) in mojRecept.komentari" :key="index" class="komentar">
                        <p>{{komentar.komentar}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <Footer></Footer>
</div>
</template>

<style>
    .iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
  margin: auto;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}

.tabela-opste-informacije
{
    width: 50%;
    font-size: 20px;
}

.linija{
  border: 1px dotted #ff0000;
}

h2{
    margin-top: 3vh;
    margin-bottom: 3vh;
}

#moj-komentar{
    border-width: 3px;
    width: 50%;
    margin: auto;
}

#btn-unesi-komentar{
    margin-top: 3%;
    margin-bottom: 3%;
}

#naziv-recepta{
    margin-bottom: 10%;
}

.komentar{
    text-align: left;
    padding-left: 5px;
    border-style: solid;
    border-color: rgb(39, 37, 37);
    border-width: 1px;
    border-radius: 5px;
    margin-bottom: 50px;

    width: 50%;
    height: auto;
    margin-left: auto;
    margin-right: auto;

    box-shadow: 5px 5px rgba(97, 29, 29, 0.5);
}

.komentar>p{
    overflow-wrap: break-word;
}

.glavno{
    margin-top: 1vh;
    margin-bottom: 5vh;
}

.info{
    margin-top: 0;
    padding-top: 10px;
    text-align: left;
    
}

.carousel{
    height: 100%;
    margin: auto;
}

.ocene{
    width: 50px;
}

#dugme-unesi-ocenu{
    margin-top: 2%;
}

</style>

<script>
import jsPDF from 'jspdf'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';



export default {
    components:{
        Header,
    Footer,
    },
    name: 'Recept',
    data(){
        return{
            urlSlikaGlavna: '',
            urlSlikaSporedna1: '',
            urlSlikaSporedna2: '',
            mojRecept: {},
            prosecnaOcena: 0,
            mojiKomentari: [],
            mojeOcene: [],
            ucitaneSlike: [],
            jezik: ''
        }
    },
    methods:{
        napraviEmbeddedUrl(videoURL){
            if(videoURL == '')
            {
                return 'https://www.youtube.com/embed/nqY3tv-y62A';
            }
            let deoZaUklanjanje = 'watch?v=';
            let pozicija = videoURL.indexOf(deoZaUklanjanje);
            let url = videoURL.slice(0, pozicija) + 'embed/' + videoURL.slice(pozicija + 8, videoURL.length);
            return url;
        },
        promenaJezika() {
            window.location.reload();
            let jezik = localStorage.getItem("jezik");
        },
        zameniSliku(id){
            let glavnaSlika = document.getElementById('slika-glavna');
            let sporednaSlika = document.getElementById('slika-sporedna-' + id);

            let tmp = glavnaSlika.src;
            glavnaSlika.src = sporednaSlika.src;
            sporednaSlika.src = tmp;
        },
        racunajProsecnuOcenu(){
            let ocene = this.mojRecept.ocene;
            if(ocene.length == 0)
            {
                this.prosecnaOcena = 0;
                return 0;
            }
            let suma = 0;
            ocene.forEach(ocena => {
                suma += ocena;
            });
            this.prosecnaOcena = suma / ocene.length;
            this.prosecnaOcena = this.prosecnaOcena.toFixed(2);
            return this.prosecnaOcena;
        },
        ucitajMojeKomentare(){
            if(localStorage.getItem('mojiKomentari') == null)
            {
                this.mojiKomentari = [];
                localStorage.setItem('mojiKomentari', JSON.stringify(this.mojiKomentari));
            }
            else
            {
                this.mojiKomentari = JSON.parse(localStorage.getItem('mojiKomentari'));
            }
        },
        ucitajMojeOcene(){
            if(localStorage.getItem('mojeOcene') == null)
            {
                this.mojeOcene = [];
                localStorage.setItem('mojeOcene', JSON.stringify(this.mojeOcene));
            }
            else
            {
                this.mojeOcene = JSON.parse(localStorage.getItem('mojeOcene'));
            }
        },
        unesiKomentar(){
            let noviKomentar = document.getElementById('moj-komentar').value;
            if(noviKomentar != "")
            {   
                let komentarObj = {
                    komentar: noviKomentar,
                    vreme: this.dohvatiTrenutnoVreme()
                };
                let mojKomentarObj = {
                    idRecepta: this.mojRecept.id,
                    imeRecepta: this.mojRecept.ime,
                    komentar: noviKomentar,
                    vreme: this.dohvatiTrenutnoVreme()
                };

                this.mojiKomentari.push(mojKomentarObj);
                localStorage.setItem('mojiKomentari', JSON.stringify(this.mojiKomentari));

                this.mojRecept.komentari.push(komentarObj);
                
                let sviRecepti = [];
                if(this.jezik == 'srpski')
                    sviRecepti = JSON.parse(localStorage.getItem('listaRecepata'));
                else
                    sviRecepti = JSON.parse(localStorage.getItem('engleskiRecepti'));

                for(let i = 0; i < sviRecepti.length; i++)
                {
                    if(sviRecepti[i].id == this.mojRecept.id)
                    {
                        sviRecepti[i] = this.mojRecept;
                        break;
                    }
                }

                if(this.jezik == 'srpski')
                    localStorage.setItem('listaRecepata', JSON.stringify(sviRecepti));
                else
                    localStorage.setItem('engleskiRecepti', JSON.stringify(sviRecepti));
            }
        },
        dohvatiTrenutnoVreme(){
            let vreme = new Date().toLocaleString();
            return vreme;
        },
        dohvatiSliku(img)
        {
            try{
                return require('../assets/recepti/' + this.$route.params.id + '/' + '1.jpg');
            }
            catch(exception)
            {
                return require('../assets/recepti/musaka.jpg');
            }
        },
        unesiOcenu()
        {
            let ocena = parseInt(document.getElementById('moguceOcene').value);
            let novaMojaOcena = {
                idRecepta: this.mojRecept.id,
                imeRecepta: this.mojRecept.ime,
                ocena: ocena
            }
            this.mojeOcene.push(novaMojaOcena);
            localStorage.setItem('mojeOcene', JSON.stringify(this.mojeOcene));

            this.mojRecept.ocene.push(ocena);
            let sviRecepti = [];

            if(this.jezik == 'srpski')
                sviRecepti = JSON.parse(localStorage.getItem('listaRecepata'));
            else
                sviRecepti = JSON.parse(localStorage.getItem('engleskiRecepti'));

            for(let i = 0; i < sviRecepti.length; i++)
            {
                if(sviRecepti[i].id == this.mojRecept.id)
                {
                    sviRecepti[i] = this.mojRecept;
                    break;
                }
            }
            let id = this.mojRecept.id;
            if(this.jezik == 'srpski')
                localStorage.setItem('listaRecepata', JSON.stringify(sviRecepti));
            else
                localStorage.setItem('engleskiRecepti', JSON.stringify(sviRecepti));
            let prosecnaOcena = this.racunajProsecnuOcenu();
            let recepti1 = JSON.parse(localStorage.getItem("listaRecepata"));
            let recepti2 = JSON.parse(localStorage.getItem("engleskiRecepti"));
            for (let i = 0; i < recepti1.length; i++){
                if (recepti1[i].id == id) {
                    recepti1[i].ocena = prosecnaOcena;
                    //alert("Prosecna ocena:" + prosecnaOcena + "; id:" + id);
                }
                if (recepti2[i].id == id) {
                    recepti2[i].ocena = prosecnaOcena;
                    //alert("Prosecna ocena:" + prosecnaOcena + "; id:" + id);
                }
            }
            localStorage.setItem('listaRecepata', JSON.stringify(recepti1));
            localStorage.setItem('engleskiRecepti', JSON.stringify(recepti2));

        },
        skiniPDF()
        {
            let ime= this.mojRecept.ime;
            var doc = new jsPDF('p', 'pt', 'a4');
            doc.setFontSize(24);
            doc.text(this.mojRecept.ime, 10, 30, {align: 'left', maxWidth: 500, renderingMode: 'fill'});
            //doc.text(this.mojRecept.kratakOpis, 10, 30, {align: 'left', maxWidth: 200});
            let newTempElem = document.createElement("div")
            newTempElem.style = 'font-size:12px; width:600px';
            newTempElem.innerHTML = this.mojRecept.kratakOpis;
            doc.html(newTempElem, { callback:function(doc){
                doc.save(ime + '.pdf');
            }, x: 10, y: 80});
        }
    },
    created(){
        this.jezik = localStorage.getItem('jezik');
        let recepti = [];
        if(this.jezik == 'srpski')
            recepti = JSON.parse(localStorage.getItem('listaRecepata'));
        else
            recepti = JSON.parse(localStorage.getItem('engleskiRecepti'));

        for(let i = 0; i < recepti.length; i++)
        {
            if(recepti[i].id == this.$route.params.id)
            {
                this.mojRecept = recepti[i];
            }
        }

        this.racunajProsecnuOcenu();
        this.ucitajMojeKomentare();
        this.ucitajMojeOcene();

    },
    mounted(){
        document.getElementById('tekst-recepta').innerHTML = this.mojRecept.kratakOpis;
    }
}
</script>
<template>
<Header></Header>
    <div>
        <div class="glavno">
            <div class="row">
                <div class="col-lg-6 col-12 info">
                    <h1 id="naziv-recepta">{{mojRecept.naziv}}</h1>
                    <span> <b>Trajanje:</b> {{mojRecept.trajanje}}</span> <br>
                    <span><b>Težina: </b>{{mojRecept.tezina}}</span> <br>
                    <span><b>Prosečna ocena:</b> {{prosecnaOcena}}</span> <br>
                    <table class="ocene-tabela">
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
                    </table>       
                    <button class="btn btn-outline-success" id="dugme-unesi-ocenu" @click="unesiOcenu()">Unesi ocenu</button>   
                    <button class="btn btn-outline-secondary" id="dugme-pdf" @click="skiniPDF()">Sacuvaj recept</button>      
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
        <hr>
        <div class="row">
            <div class="col-12">
                <h2>Način pripreme</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>{{mojRecept.priprema}}</p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-12">
                <h2>Video uputstvo za pripremu</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="iframe-container">
                    <iframe id="video" :src="mojRecept.videoUrl" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <hr>
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
        <hr>
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
</template>

<style>
    .iframe-container {
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
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
    margin-top: 50px;

    width: 50%;
    height: auto;
    margin-left: auto;
    margin-right: auto;

    box-shadow: 5px 5px rgba(143, 28, 28, 0.5);
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
            ucitaneSlike: []
        }
    },
    methods:{
        zameniSliku(id){
            let glavnaSlika = document.getElementById('slika-glavna');
            let sporednaSlika = document.getElementById('slika-sporedna-' + id);

            let tmp = glavnaSlika.src;
            glavnaSlika.src = sporednaSlika.src;
            sporednaSlika.src = tmp;
        },
        racunajProsecnuOcenu(){
            let ocene = this.mojRecept.ocene;
            let suma = 0;
            ocene.forEach(ocena => {
                suma += ocena;
            });
            this.prosecnaOcena = suma / ocene.length;
            this.prosecnaOcena = this.prosecnaOcena.toFixed(2);
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
        test(){
            if(localStorage.getItem('recepti') == null)
            {
                let recepti = [{
                    id: 1,
                    naziv: 'Recept neki',
                    ocene: [4, 3, 4],
                    trajanje: '45 min',
                    tezina: 3,
                    priprema: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius amet adipisci in non beatae facilis doloremque? Aut sit, esse repellat quisquam nesciunt repudiandae excepturi impedit vel neque quasi id?',
                    videoUrl: 'https://www.youtube.com/embed/8nXqcugV2Y4',
                    slike: ['1.jpg', '2.png', '3.jpg'],
                    komentari: []
                }];
                localStorage.setItem('recepti', JSON.stringify(recepti));
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
                    imeRecepta: this.mojRecept.naziv,
                    komentar: noviKomentar,
                    vreme: this.dohvatiTrenutnoVreme()
                };

                this.mojiKomentari.push(mojKomentarObj);
                localStorage.setItem('mojiKomentari', JSON.stringify(this.mojiKomentari));

                this.mojRecept.komentari.push(komentarObj);

                let sviRecepti = JSON.parse(localStorage.getItem('recepti'));

                for(let i = 0; i < sviRecepti.length; i++)
                {
                    if(sviRecepti[i].id == this.mojRecept.id)
                    {
                        sviRecepti[i] = this.mojRecept;
                        break;
                    }
                }

                localStorage.setItem('recepti', JSON.stringify(sviRecepti));
            }
        },
        dohvatiTrenutnoVreme(){
            let vreme = new Date().toLocaleString();
            return vreme;
        },
        dohvatiSliku(img)
        {
            return require('../assets/recepti/' + this.$route.params.id + '/' + 1);
        },
        unesiOcenu()
        {
            let ocena = parseInt(document.getElementById('moguceOcene').value);
            let novaMojaOcena = {
                idRecepta: this.mojRecept.id,
                imeRecepta: this.mojRecept.naziv,
                ocena: ocena
            }
            this.mojeOcene.push(novaMojaOcena);
            localStorage.setItem('mojeOcene', JSON.stringify(this.mojeOcene));

            this.mojRecept.ocene.push(ocena);
            let sviRecepti = JSON.parse(localStorage.getItem('recepti'));

                for(let i = 0; i < sviRecepti.length; i++)
                {
                    if(sviRecepti[i].id == this.mojRecept.id)
                    {
                        sviRecepti[i] = this.mojRecept;
                        break;
                    }
                }

            localStorage.setItem('recepti', JSON.stringify(sviRecepti));

            this.racunajProsecnuOcenu();
        },
        skiniPDF()
        {
            let ime= this.mojRecept.naziv;
            var doc = new jsPDF();
            doc.text(this.mojRecept.naziv, 10, 10, {align: 'left', maxWidth: 80, renderingMode: 'fill'});
            doc.text(this.mojRecept.priprema, 10, 30, {align: 'left', maxWidth: 200});
            doc.save(ime + '.pdf');
        }
    },
    created(){
        this.test();
        let recepti = JSON.parse(localStorage.getItem('recepti'));
        
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
        /*$('.carousel').carousel('cycle');
        $('.carousel').carousel({
            pause: false
        });*/
    }
}
</script>
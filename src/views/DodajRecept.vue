<template>
    <Header @osveziJezik="promenaJezika()"></Header>
    <div v-if="this.jezik=='srpski'">
        <div>
            <h2>Dodaj recept</h2>
        </div>
        <div class="row ">
            <div class="col-4">&nbsp;</div>
            <div class="col-4 receptKarta">
                <div>
                    <label for="imeRecepta" class="label imeReceptaLabel">Ime recepta:</label><br>
                    <input width="100" class="imeRecepta form-control" type="text" v-model="imeRecepta">
                </div>
                <div>
                    <label for="grupaRecepta" class="label grupaReceptaLabel">Grupa recepta:</label>
                    <select name="grupaRecepta" class="form-control selcls" id="grupaRecepta" v-model="grupaRecepta">
                        <option value="predjelo">Predjelo</option>
                        <option value="glavno jelo">Glavno jelo</option>
                        <option value="desert">Desert</option>
                        <option value="uzina">Uzina</option>
                    </select>
                </div>
                <div>                       
                    <label for="uputstvo" class="label uputstvoLabel">Uputstvo za pripremu:</label>
                    <textarea class="uputstvo form-control" name="uputstvo" id="" cols="30" rows="10" v-model="uputstvo"></textarea>
                </div>
                <div>
                    <label for="duzinaSpremanja" class="label duzinaSpremanjaLabel">Trajanje spremanja recepta(minuti):</label>
                    <input class="duzinaSpremanja form-control" type="number" v-model="duzinaSpremanja">
                </div>
                <div>
                    <label class="label tezinaSpremanjaLabel" for="tezinaSpremanja">Tezina spremanja recepta(0-5):</label>
                    <input class="tezinaSpremanja form-control" type="number" step="0.2" v-model="tezinaSpremanja">
                </div>
                <br><br>
                <div>
                    <button class="butt" @click="dodaj()" type="button">Dodaj recept</button>
                </div>
                <br>
                <span class="uspeh">{{this.uspeh}}</span>
                <span class="greska">{{this.greska}}</span>
            </div>
        </div>
    </div>
    <div v-else>
        <div>
            <h2>Add recipe</h2>
        </div>
        <div class="row">
            <div class="col-4">&nbsp;</div>
            <div class="col-4 receptKarta">
                <div>
                    <label for="imeRecepta" class="label imeReceptaLabel">Name of recipe:</label><br>
                    <input width="100" class="imeRecepta form-control" type="text" v-model="imeRecepta">
                </div>
                <div>
                    <label for="grupaRecepta" class="label grupaReceptaLabel">Group of recipe:</label>
                    <select name="grupaRecepta" class="form-control selcls" id="grupaRecepta" v-model="grupaRecepta">
                        <option value="predjelo">Appetizer</option>
                        <option value="glavno jelo">Main dish</option>
                        <option value="desert">Desert</option>
                        <option value="uzina">Snack</option>
                    </select>
                </div>
                <div>                       
                    <label for="uputstvo" class="label uputstvoLabel">Preparation manual:</label>
                    <textarea class="uputstvo form-control" name="uputstvo" id="" cols="30" rows="10" v-model="uputstvo"></textarea>
                </div>
                <div>
                    <label for="duzinaSpremanja" class="label duzinaSpremanjaLabel">Duration of recipe preparation(in minutes):</label>
                    <input class="duzinaSpremanja form-control" type="number" v-model="duzinaSpremanja">
                </div>
                <div>
                    <label class="label tezinaSpremanjaLabel" for="tezinaSpremanja">Difficulty of recipe preparation(0-5):</label>
                    <input class="tezinaSpremanja form-control" type="number" step="0.2" v-model="tezinaSpremanja">
                </div>
                <br><br>
                <div>
                    <button class="butt" @click="dodaj()" type="button">Add recipe</button>
                </div>
                <br>
                <span class="uspeh">{{this.engleskiUspeh}}</span>
                <span class="greska">{{this.engleskaGreska}}</span>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>


<style>

.receptKarta{
    background-color: rgba(207, 155, 155, 0.7);
    font-weight: bold;
}

.label {
    padding-top: 12px;
}

.imeRecepta{
    width: 100%;
}

.greska {
    color: red;
}

.uspeh {
    color: green;
}


.butt{
    width: 100%;
    padding: 10px;
    background: #df5b0ea1;
    color: white;
    font-size: 15px;
    border: 1px solid grey;
    border-left: none; 
    cursor: pointer;
    margin-bottom: 2px;
}
</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{Header,
        Footer
    },
     name: 'DodajRecept',
     data() {
         return {
             imeRecepta:'',
             grupaRecepta:'',
             uputstvo:'',
             duzinaSpremanja:0,
             tezinaSpremanja:0,
             listaRecepata:[],
             greska:'',
             minDuzinaImena:8,
             minDuzinaUputstva:100,
             jezik:'',
             uspeh:'',
             engleskiUspeh:'',
             engleskaGreska:''
         }
     },
    created(){
        //this.recepti = JSON.parse(localStorage.getItem('recepti'));
        this.jezik = localStorage.getItem("jezik");
        this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));
        this.greska = '';
        this.uspeh = '';
        this.engleskiUspeh = '';
        this.engleskaGreska = '';
    },
    methods: {
        promenaJezika() {
            window.location.reload();
            let jezik = localStorage.getItem("jezik");
        },
        proveriGreske(){
            if (this.imeRecepta.length < this.minDuzinaImena){
                this.greska = 'Prekratko ime recepta. Ime recepta mora da sadrži barem 8 karaktera.';
                this.engleskaGreska = 'Too short name of recipe. Name of recipe must contain at least 8 characters';
                this.uspeh = '';
                this.engleskiUspeh = '';
                return false;
            }
            if (this.grupaRecepta == null || this.grupaRecepta == ''){
                this.greska = 'Niste odabrali kojoj grupi recepata pripada recept koji dodajete.';
                this.engleskaGreska = "You didn't choose which group of recipes your recipe belongs.";
                this.uspeh = '';
                this.engleskiUspeh = '';
                return false;
            }
            if (this.uputstvo < this.minDuzinaUputstva){
                this.greska = 'Prekratko uputstvo recepta. Uputstvo recepta mora da sadrži barem 100 karaktera.';
                this.engleskaGreska = 'Too short directions of recipe. Directions must contain at least 100 characters';
                this.uspeh = '';
                this.engleskiUspeh = '';
                return false;
            }
            if (this.duzinaSpremanja <= 0.0) {
                this.greska = 'Priprema recepta ne može da traje nula ili manje minuta.';
                this.engleskaGreska = 'Preparation of recipe cannot last for zero or less minutes.';
                this.uspeh = '';
                this.engleskiUspeh = '';
                return false;
            }
            if (this.tezinaSpremanja <= 0.0) {
                this.greska = 'Tezina pripremanja recepta ne može da bude nula ili manje.';
                this.engleskaGreska = 'Difficulty of preparing the recipe cannot be zero or less.';
                this.uspeh = '';
                this.engleskiUspeh = '';
                return false;
            }
            return true;
        },

        proveriSlicnost() {
            this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));
            for (let i = 0; i < this.listaRecepata.length; i++) {
                if (this.listaRecepata[i].ime == this.imeRecepta) {
                    this.greska = 'Recept koji pokušavate da dodate već postoji.';
                    this.greska = 'Recipe that you are trying to add already exists.';
                    this.uspeh = '';
                    this.engleskiUspeh = '';
                }
            }
            
            return true
        },

        dodaj() {
            if (this.proveriGreske()) {
                if (this.proveriSlicnost()) {
                    let skracenoUputstvo ="";
                    let duzina = 40;
                    if (duzina > this.uputstvo.length) {
                        duzina = this.uputstvo.length;
                    }
                    skracenoUputstvo = this.uputstvo.slice(0, duzina);

                    let id = parseInt(localStorage.getItem("staticId"));
                    let recept = {
                        id: id,
                        ime:this.imeRecepta,
                        tezina:parseFloat(this.tezinaSpremanja),
                        ocena:0.0,
                        slika:'assets/recepti/musaka.jpg',
                        kratakOpis:this.uputstvo,
                        tip:this.grupaRecepta,
                        trajanje:parseInt(this.duzinaSpremanja),
                        opisJela:"",
                        video:"",
                        korisnikDodao:true,
                        obrisan: false,
                        komentari: [],
                        ocene: []
                    }
                    id++;
                    localStorage.setItem("staticId", id);
                    this.listaRecepata.push(recept);
                    localStorage.setItem("listaRecepata", JSON.stringify(this.listaRecepata));
                    this.uspeh = 'Uspesno ste dodali recept.';
                    this.engleskiUspeh = "You added recipe successfully."
                    //this.sinhronizujRecepte(recept); // Dodaj recept i u niz mojih recepata (Nemanja)
                    this.engleskaGreska = '';
                    this.greska='';
                }
            }
        },
        /*sinhronizujRecepte(recept) // Metoda za dupliranje recepta u niz recepata - NEMANJA
        {
            let receptiLocalStorage = [];
            if(localStorage.getItem('recepti') == null)
            {
                localStorage.setItem('recepti', JSON.stringify(receptiLocalStorage));
            }
            else
                receptiLocalStorage = JSON.parse(localStorage.getItem('recepti'));
            
            let idRecepta = receptiLocalStorage[receptiLocalStorage.length - 1].id + 1;

            let noviRecept = {
                id: idRecepta,
                komentari: [],
                naziv: recept.ime,
                ocene: recept.ocena,
                priprema: recept.kratakOpis,
                slike: [],
                tezina: recept.tezina,
                trajanje: recept.trajanje,
                videoUrl: 'https://www.youtube.com/watch?v=tGFp1wJrjuI'
            }

            receptiLocalStorage.push(noviRecept);
            localStorage.setItem('recepti', JSON.stringify(receptiLocalStorage));

            // dodavanje u mojiRecepti u LocalStorage
            let noviMojRecept = {
                id: noviRecept.id,
                naziv: noviRecept.naziv
            }

            let mojiReceptiLocalStorage = [];
            if(localStorage.getItem('mojiRecepti') == null)
            {
                localStorage.setItem('mojiRecepti', JSON.stringify(mojiReceptiLocalStorage));
            }
            else
                mojiReceptiLocalStorage = JSON.parse(localStorage.getItem('mojiRecepti'));

            mojiReceptiLocalStorage.push(noviMojRecept);
            localStorage.setItem('mojiRecepti', JSON.stringify(mojiReceptiLocalStorage));
        }*/
    }
}
</script>

<template>
    <div>
        <form id="dodajRecept">
            <div>
                <label for="imeRecepta">Ime recepta:</label>
                <input type="text" v-model="imeRecepta">
            </div>
            <div>
                <label for="grupaRecepta">Grupa recepta:</label>
                <select name="grupaRecepta" id="grupaRecepta" v-model="grupaRecepta">
                    <option value="predjelo">Predjelo</option>
                    <option value="glavno jelo">Glavno jelo</option>
                    <option value="desert">Desert</option>
                    <option value="uzina">Uzina</option>
                </select>
            </div>

            <div>
                <label for="uputstvo">Uputstvo za pripremu:</label>
                <textarea name="uputstvo" id="" cols="30" rows="10" v-model="uputstvo"></textarea>
            </div>
            <div>
                <label for="duzinaSpremanja">Trajanje spremanja recepta(minuti):</label>
                <input type="number" v-model="duzinaSpremanja">
            </div>

            <div>
                <label for="tezinaSpremanja">Tezina spremanja recepta(0-5):</label>
                <input type="number" step="0.2" v-model="tezinaSpremanja">
            </div>
            <span class="greska">{{this.greska}}</span>
            <div>
                <button @click="dodaj()" type="button">Dodaj recept</button>
            </div>
        </form>
    </div>
</template>


<style>

</style>

<script>

export default {
    
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
             minDuzinaUputstva:100
         }
     },
    created(){
        //this.recepti = JSON.parse(localStorage.getItem('recepti'));
        this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));
        this.listaRecepata.forEach(el=> {alert(el.ime);});
        this.greska = '';
    },
    methods: {
        proveriGreske(){
            if (this.imeRecepta.length < this.minDuzinaImena){
                this.greska = 'Prekratko ime recepta. Ime recepta mora da sadrži barem 8 karaktera.';
                return false;
            }
            if (this.grupaRecepta == null || this.grupaRecepta == ''){
                this.greska = 'Niste odabrali kojoj grupi recepata pripada recept koji dodajete.';
                return false;
            }
            if (this.uputstvo < this.minDuzinaUputstva){
                this.greska = 'Prekratko uputstvo recepta. Uputstvo recepta mora da sadrži barem 100 karaktera.';
                return false;
            }
            if (this.duzinaSpremanja <= 0.0) {
                this.greska = 'Priprema recepta ne može da traje nula ili manje minuta.';
                return false;
            }
            if (this.tezinaSpremanja <= 0.0) {
                this.greska = 'Tezina pripremanja recepta ne može da bude nula ili manje.';
                return false;
            }
            return true;
        },

        proveriSlicnost() {
            this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));
            for (let i = 0; i < this.listaRecepata.length; i++) {
                if (this.listaRecepata[i].ime == this.imeRecepta) {
                    this.greska = 'Recept koji pokušavate da dodate već postoji.';
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
                    alert("Prosao ovaj deo");
                    skracenoUputstvo = this.uputstvo.slice(0, duzina);
                    alert("Dodato uputstvo skracenom");


                    let recept = {
                        ime:this.imeRecepta,
                        tezina:this.tezinaSpremanja,
                        ocena:5.0,
                        slika:'assets/recepti/musaka.jpg',
                        kratakOpis:skracenoUputstvo,
                        tip:this.grupaRecepta,
                        trajanje: 45,
                        korisnikDodao:true
                    }
                    this.listaRecepata.push(recept);
                    localStorage.setItem("listaRecepata", JSON.stringify(this.listaRecepata));
                    this.sinhronizujRecepte(recept); // Dodaj recept i u niz mojih recepata (Nemanja)
                    this.greska='';
                    this.listaRecepata.forEach(el=> {alert(el.ime);});
                    this.greska = '';
                }
            }
            this.listaRecepata.forEach(el=> {alert(el.ime);});
        },
        sinhronizujRecepte(recept) // Metoda za dupliranje recepta u niz recepata - NEMANJA
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
        }
    }
}
</script>

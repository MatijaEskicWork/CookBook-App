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
                    <option value="predjelo">Predjel</option>
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
            <span class="greska">{{greska}}</span>
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
             greska:''
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
            return true;
        },
        dodaj() {
            if (this.proveriGreske()) {
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
                    korisnikDodao:true
                }
                this.listaRecepata.push(recept);
                localStorage.setItem("listaRecepata", JSON.stringify(this.listaRecepata));
                this.greska='';
                this.listaRecepata.forEach(el=> {alert(el.ime);});
            }
            else this.greska = 'Neuspešno ste uneli podatke.';
            this.listaRecepata.forEach(el=> {alert(el.ime);});
        }
    }
}
</script>

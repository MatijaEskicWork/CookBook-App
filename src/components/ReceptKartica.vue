<template>
    <div class="centralno" v-if="this.jezik == 'srpski'">
        <div class="kartica">
            <div class="naslovKartica">{{this.ime}}</div>
            <div class="row informacijeKartica">
                <div class="col-md-4 col-sm-4 col-lg-4 levoKartica">
                    <img v-if="this.korisnikDodao == false" class="karticaSlika" :src="require('../assets/recepti/' + this.id + '/' + '1.jpg')" alt="">
                    <img v-else class="karticaSlika" :src="require('../assets/recepti/musaka.jpg')" alt="">
                </div> <!-- Bilo je  require('@/' + this.slika) -->
                <div class="col-md-6 col-sm-6 col-lg-5 centarKartica">
                    {{this.kratakOpisJela}}...
                </div>
                <div class="col-md-2 col-sm-2 col-lg-3 desnoKartica">
                    <table>
                        <tr>
                            <td>Ocena:&nbsp;&nbsp;<b>{{this.ocena}}/5.0</b></td>
                        </tr>
                        <tr>
                            <td>Tezina:&nbsp;&nbsp;<b>{{this.tezina}}/5.0</b></td>
                        </tr>
                        <tr>
                            <td>Trajanje:&nbsp;&nbsp;<b>{{this.trajanje}}min</b></td>
                        </tr>
                        <br>
                        <tr>
                            <td><router-link class="linkStil" :to="this.receptLink"><b>Prikaži još</b>&nbsp;<img class ="strelica" src="@/assets/ostaleSlike/arrow-right.svg" ></router-link></td>
                        </tr>
                        <tr>
                            <td><button @click="obrisi()" class="btn btn-danger"><b>Obriši</b></button></td>
                        </tr>
                    </table>
                    <!--<div class="ocena">Ocena:&nbsp;&nbsp;<b>{{this.ocena}}/5.0</b></div>
                    <div class="tezina">Tezina:&nbsp;&nbsp;<b>{{this.tezina}}/5.0</b></div> 
                    <div class="trajanje">Trajanje:&nbsp;&nbsp;<b>{{this.trajanje}}min</b></div>
                    <br>
                    <div class="prikaziJos"><router-link class="linkStil" :to="this.receptLink"><b>Prikaži još</b>&nbsp;<img class ="strelica" src="@/assets/ostaleSlike/arrow-right.svg" ></router-link></div>
                    <div class="obrisi"><button @click="obrisi()" class="btn btn-danger"><b>Obriši</b></button></div>
                     OVAKO TREBA, KAO OVO ISPOD, OVO IZNAD RADI LAKSEG TESTIRANJA 
                    <div  v-if="korisnikDodao" class="obrisi"><button @click="obrisi()" class="btn btn-danger"><b>Obriši</b></button></div>
                    -->
                </div>          
            </div>
        </div>
    </div>
    <div class="centralno" v-else>
        <div class="kartica">
            <div class="naslovKartica">{{this.engleskoIme}}</div>
            <div class="row informacijeKartica">
            <div class="col-md-4 col-sm-4 col-lg-4 levoKartica">
                    <img v-if="this.korisnikDodao == false" class="karticaSlika" :src="require('../assets/recepti/' + this.id + '/' + '1.jpg')" alt="">
                    <img v-else class="karticaSlika" :src="require('../assets/recepti/musaka.jpg')" alt="">
                </div> <!-- Bilo je  require('@/' + this.slika) -->
                <div class="col-md-6 col-sm-6 col-lg-5 centarKartica">
                    {{this.engleskiOpis}}...
                </div>
                <div class="col-md-2 col-sm-2 col-lg-3 desnoKartica">
                    <table>
                        <tr>
                            <td>Grade:&nbsp;&nbsp;<b>{{this.ocena}}/5.0</b></td>
                        </tr>
                        <tr>
                            <td>Difficulty:&nbsp;&nbsp;<b>{{this.tezina}}/5.0</b></td>
                        </tr>
                        <tr>
                            <td>Duration:&nbsp;&nbsp;<b>{{this.trajanje}}min</b></td>
                        </tr>
                        <br>
                        <tr>
                            <td><router-link class="linkStil" :to="this.receptLink"><b>View more</b>&nbsp;<img class ="strelica" src="@/assets/ostaleSlike/arrow-right.svg" ></router-link></td>
                        </tr>
                        <tr>
                            <td><button @click="obrisi()" class="butt btn btn-danger"><b>Delete</b></button></td>
                        </tr>
                    </table>
                    <!--<div class="ocena">Ocena:&nbsp;&nbsp;<b>{{this.ocena}}/5.0</b></div>
                    <div class="tezina">Tezina:&nbsp;&nbsp;<b>{{this.tezina}}/5.0</b></div> 
                    <div class="trajanje">Trajanje:&nbsp;&nbsp;<b>{{this.trajanje}}min</b></div>
                    <br>
                    <div class="prikaziJos"><router-link class="linkStil" :to="this.receptLink"><b>Prikaži još</b>&nbsp;<img class ="strelica" src="@/assets/ostaleSlike/arrow-right.svg" ></router-link></div>
                    <div class="obrisi"><button @click="obrisi()" class="btn btn-danger"><b>Obriši</b></button></div>
                     OVAKO TREBA, KAO OVO ISPOD, OVO IZNAD RADI LAKSEG TESTIRANJA 
                    <div  v-if="korisnikDodao" class="obrisi"><button @click="obrisi()" class="btn btn-danger"><b>Obriši</b></button></div>
                    -->
                </div>
            </div>
        </div>
    </div>    
</template>

<style>
.kartica {
    width: 60%;
    margin: 20px;
    margin-bottom: 30px;
    /*padding: 10px;
    padding-left: 20px;
    padding-bottom: 15px;*/
    background-color: #d6b7b5de;
}

.informacijeKartica {
    display: flex;
}

.levoKartica{
    padding-left: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
}

.naslovKartica {
    padding-top: 2px;
    font-weight: bolder;
    font-size: 20px;
}

img {
width: 150px;
height: 150px;
}

.strelica {
    width: 20px;
    height: 20px;
}

.linkStil:link, .linkStil:visited {
    text-decoration: none;
    color:black;
}

.linkStil:hover, .linkStil:active{
    text-decoration: none;
    color:#662f2bde;
}

.desnoKartica{
    text-align: left;
}

.centarKartica{
    text-align: center;
}

.centralno{
    display: flex;
    justify-content: center;
}

.btn-danger {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>


<script>
export default {
    name: 'ReceptKartica',
    props: {
        id: Number,
        ocena: Number,
        tezina: Number,
        ime: String,
        kratakOpis: String,
        slika: String,
        tip: String,
        korisnikDodao: Boolean,
        trajanje:Number,
        opisJela:String,
    },
    data() {

        return{
            listaRecepata: [],
            obrisan: false,
            kratakOpisJela:'',
            jezik:'',
            receptLink:'',
            engleskiOpis:'',
            engleskoIme:''
        }
    },
    setup(props, context)
    {
        function obrisi() {
            this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));
            for(let i = 0; i < this.listaRecepata.length; i++) {
                if (this.listaRecepata[i].ime == props.ime) {
                    this.listaRecepata.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("listaRecepata", JSON.stringify(this.listaRecepata));
            context.emit("refreshListu", "");
        }

        return{
            obrisi
        }
    },
    methods: {
        /*obrisi() {
            this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata")) 
            for(let i = 0; i < this.listaRecepata.length; i++) {
                if (this.listaRecepata[i].ime == this.ime) {
                    this.listaRecepata.splice(i, 1)
                    break;
                }
            }
            localStorage.setItem("listaRecepata", JSON.stringify(this.listaRecepata))
            this.obrisan = true;
            EventBus.$emit("refreshListaRecepata", "");
        }*/
    },
    created() {
        this.receptLink = "/recept/" + this.id;
        this.kratakOpisJela = this.opisJela.slice(0,150);
        this.jezik = localStorage.getItem("jezik");
        let engleskiRecepti = JSON.parse(localStorage.getItem("engleskiRecepti"));
        let ind = 0;
        for (let i = 0; i < engleskiRecepti.length; i++) {
            if (engleskiRecepti[i].id == this.id) {
                ind = i;
            }
        }
        this.engleskiOpis = engleskiRecepti[ind].opisJela.slice(0,150);
        this.engleskoIme = engleskiRecepti[ind].ime;
    }

}
</script>
<template>
    <div class="row">
        <div class="col-12">
            <h1>Moji recepti</h1>
            <ol id="lista-mojih-recepata">
                <li v-for="recept in mojiRecepti" :key="recept.id">
                    <router-link v-bind:to="'/recept/' + recept.id">{{recept.naziv}}</router-link>
                </li>
            </ol>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h1>Moji komentari</h1>
            <table class="table table-striped table-bordered">
                <tr>
                    <th>#</th>
                    <th>Recept</th>
                    <th>Komentar</th>
                    <th>Vreme</th>
                </tr>
                <tr v-for="(komentar, index) in mojiKomentari" :key="index">
                    <td>{{index + 1}}.</td>
                    <td><router-link v-bind:to="'/recept/' + komentar.idRecepta">{{komentar.imeRecepta}}</router-link></td>
                    <td>{{komentar.komentar}}</td>
                    <td>{{komentar.vreme}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <h1>Moje ocene</h1>
            <table class="table table-striped table-bordered">
                <tr>
                    <th>#</th>
                    <th>Recept</th>
                    <th>Ocena</th>
                </tr>
                <tr v-for="(ocena, index) in mojeOcene" :key="index">
                    <td>{{index + 1}}.</td>
                    <td><router-link v-bind:to="'/recept/' + ocena.idRecepta">{{ocena.imeRecepta}}</router-link></td>
                    <td>{{ocena.ocena}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
    #lista-mojih-recepata{
        text-align: left;
    }
</style>

<script>
export default {
    name: 'MojNalog',
    data() {
        return{
            mojiRecepti: [],
            mojiKomentari: [],
            mojeOcene: []
        }
    },
    created(){
        document.title = 'Moj nalog'
        this.ucitajRecepte();
        this.ucitajKomentare();
        this.ucitajOcene();
        //this.popuniStranicu();
    },
    methods: {
        ucitajRecepte(){
            if(localStorage.getItem('mojiRecepti') == null)
            {
                this.mojiRecepti = [];
                localStorage.setItem('mojiRecepti', JSON.stringify(this.mojiRecepti));
            }
            else
                this.mojiRecepti = JSON.parse(localStorage.getItem('mojiRecepti'));
        },
        ucitajKomentare(){
            if(localStorage.getItem('mojiKomentari') == null)
            {
                this.mojiKomentari = [];
                localStorage.setItem('mojiKomentari', JSON.stringify(this.mojiKomentari));
            }
            else
                this.mojiKomentari = JSON.parse(localStorage.getItem('mojiKomentari'));
        },
        ucitajOcene(){
            if(localStorage.getItem('mojeOcene') == null)
            {
                this.mojeOcene = [];
                localStorage.setItem('mojeOcene', JSON.stringify(this.mojeOcene));
            }
            else
                this.mojeOcene = JSON.parse(localStorage.getItem('mojeOcene'));
        }
        /*popuniStranicu(){
            let listaRecepata = $("#lista-mojih-recepata");
            for(let i = 0; i < this.mojiRecepti.length; i++)
            {
                let link = "/recepti/" + this.mojiRecepti[i][id];
                let nazivRecepta = this.mojiRecepti[i][naziv];

                let listItem = $("<li></li>");
                let routerLink = $("<router-link><router-link>").text(nazivRecepta);
                routerLink.attr('to', link);
                
                listItem.append(routerLink);
                listaRecepata.append(listItem);
            }
        }*/
    }
}
</script>
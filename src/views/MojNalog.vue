<template>
<div v-if="this.jezik == 'srpski'">
    <Header @osveziJezik="promenaJezika()"></Header>
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">Moji recepti</h1>
            <ol class="lista-moji-recepti" id="lista-mojih-recepata">
                <li v-for="recept in mojiRecepti" :key="recept.id">
                    <router-link v-bind:to="'/recept/' + recept.id"> {{recept.naziv}}</router-link>
                </li>
            </ol>
        </div>
    </div>
    <hr class="horizontalna-linija">
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">Moji komentari</h1>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recept</th>
                        <th>Komentar</th>
                        <th>Vreme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(komentar, index) in mojiKomentari" :key="index">
                        <td>{{index + 1}}.</td>
                        <td><router-link v-bind:to="'/recept/' + komentar.idRecepta">{{komentar.imeRecepta}}</router-link></td>
                        <td>{{komentar.komentar}}</td>
                        <td>{{komentar.vreme}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr class="horizontalna-linija">
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">Moje ocene</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recept</th>
                        <th>Ocena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(ocena, index) in mojeOcene" :key="index">
                        <td>{{index + 1}}.</td>
                        <td><router-link v-bind:to="'/recept/' + ocena.idRecepta">{{ocena.imeRecepta}}</router-link></td>
                        <td>{{ocena.ocena}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer></Footer>
</div>
<div v-else>
    <Header @osveziJezik="promenaJezika()"></Header>
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">My recipes</h1>
            <ol class="lista-moji-recepti" id="lista-mojih-recepata">
                <li v-for="recept in mojiRecepti" :key="recept.id">
                    <router-link v-bind:to="'/recept/' + recept.id"> {{recept.naziv}}</router-link>
                </li>
            </ol>
        </div>
    </div>
    <hr class="horizontalna-linija">
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">My comments</h1>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipe</th>
                        <th>Comment</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(komentar, index) in mojiKomentari" :key="index">
                        <td>{{index + 1}}.</td>
                        <td><router-link v-bind:to="'/recept/' + komentar.idRecepta">{{komentar.imeRecepta}}</router-link></td>
                        <td>{{komentar.komentar}}</td>
                        <td>{{komentar.vreme}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <hr class="horizontalna-linija">
    <div class="row">
        <div class="col-12">
            <h1 class="naslov-moj-nalog">My ratings</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Recipe</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(ocena, index) in mojeOcene" :key="index">
                        <td>{{index + 1}}.</td>
                        <td><router-link v-bind:to="'/recept/' + ocena.idRecepta">{{ocena.imeRecepta}}</router-link></td>
                        <td>{{ocena.ocena}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<style>
    #lista-mojih-recepata{
        text-align: left;
    }

    .naslov-moj-nalog{
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
    .lista-moji-recepti{
        font-size: 20px;
    }
    .horizontalna-linija{
        border: 2px solid firebrick;
    }
</style>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Header,
        Footer
    },
    name: 'MojNalog',
    data() {
        return{
            jezik: '',
            mojiRecepti: [],
            mojiKomentari: [],
            mojeOcene: [],
            mojiReceptiSrpski: [],
            mojiReceptiEngleski: []
        }
    },
    created(){
        document.title = 'Moj nalog'
        this.ucitajRecepte();
        this.ucitajKomentare();
        this.ucitajOcene();
        this.jezik = localStorage.getItem('jezik');
    },
    mounted()
    {
        //this.busEvent.emit('promeniAktivanTab', 'mojNalog');
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
        },
        promenaJezika() {
            window.location.reload();
            let jezik = localStorage.getItem("jezik");
        }
    }
}
</script>
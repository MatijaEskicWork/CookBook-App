<template>
    <div class="centralno">
        <div class="kartica">
            <div class="naslovKartica">{{this.ime}}</div>
            <div class="informacijeKartica">
                <div class="levoKartica"><img class="karticaSlika" :src="require('@/' + this.slika)" alt=""></div> 
                <div class="centarKartica">
                    {{this.kratakOpis}}...
                </div>
                <div class="desnoKartica">
                    <div class="ocena">Ocena:&nbsp;&nbsp;<b>{{this.ocena}}/5.0</b></div>
                    <div class="tezina">Tezina:&nbsp;&nbsp;<b>{{this.tezina}}/5.0</b></div> 
                    <br>
                    <div class="prikaziJos"><router-link class="linkStil" :to="'/'"><b>Prikaži još</b>&nbsp;<img class ="strelica" src="@/assets/ostaleSlike/arrow-right.svg" ></router-link></div>
                </div>          
            </div>
        </div>
    </div>    
</template>

<style>
.kartica {
    width:50%;
    margin: 20px;
    padding: 10px;
    padding-left: 20px;
    padding-bottom: 15px;
    background-color: #d6b7b5de;
}

.informacijeKartica {
    display: flex;
}

.naslovKartica {
    font-weight: bolder;
    font-size: 20px;
}

img {
width: 100px;
height: 100px;
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
</style>


<script>
export default {
    name: 'ReceptKartica',
    props: {
        ocena: Number,
        tezina: Number,
        ime: String,
        kratakOpis: String,
        slika: String,
        tip: String
    },
    data() {

        return{

        }
    },
    methods: {

    },
    created() {
        //alert(this.slika);
    }

}
</script>
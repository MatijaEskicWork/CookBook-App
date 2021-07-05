<template>
    <div>
        <div v-for="recept in this.listaRecepata">
            <recept-kartica v-if="recept.tip == this.tip" :tip="recept.tip" :ime="recept.ime" :tezina ="recept.tezina" :ocena="recept.ocena" :kratakOpis="recept.kratakOpis" :slika="recept.slika"></recept-kartica>
        </div>
    </div>
</template>

<style>

</style>



<script>
import ReceptKartica from '@/components/ReceptKartica.vue';

export default {
    name:'ListaReceptKartica',
    components: {
        ReceptKartica
    },
    props: {
        tip: String,
        filter: Boolean
    },
    data() {
        return {
            listaRecepata: []
        };
    },
    methods: {

    },
    created() {
        if (this.filter) this.listaRecepata = null;
        else this.listaRecepata = JSON.parse(localStorage.getItem("listaRecepata"));

        //alert(listaRecepata);
    }
}

</script>
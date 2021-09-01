<template>
    <div v-if="this.jezik == 'srpski'">
        <div class="row">
            <div class="col-12 kurs">
                <img src="@/assets/kurs/chef.jpg" alt="">
                <p id="opis">"...Kursevi traju 6 nedelja, jednom nedeljno u večernjim časovima po 2.5h <br>
                                Časovi su koncipirani oko jela kroz čiju pripremu ćete ovladati tehnikama kuvanja, saznati sve o namirnicama, njihovoj obradi i čuvanju, kombinovanju i uklapanju ukusa, mirisa i tekstura.
                                Organizujemo zajedničke „vannastavne“ aktivnosti (poseta pijaci, mala škola vina…)..."
                </p>
                <span><a href="https://skolakuvanja.com/kursevi-kuvanja/">Više informacija na sajtu</a></span>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="row">
            <div class="col-12 kurs">
                <img src="@/assets/kurs/chef.jpg" alt="">
                <p id="opis">"...Courses last 6 weeks, once a week in the evening for 2.5 hours. <br>
                                Classes are designed around dishes through the preparation of which you will master cooking techniques, learn all about foods, their processing and storage, combining and blending flavors, aromas and textures.
                                We organize joint "extracurricular" activities (market visit, wine school…)..."
                </p>
                <span><a href="https://skolakuvanja.com/kursevi-kuvanja/">More information can be found on the website</a></span>
            </div>
        </div>
    </div>
</template>
<style>
    .kurs>img{
        width:90%;
        height: fit-content;
    }

    .kurs>p, span{
        font-size: 20px;
        padding-top: 30px;
        text-align: center;
        max-width: 100%;
    }
    span>a{
        color: aquamarine;
        text-decoration: none;
        font-size: 25px
    }
</style>

<script>
export default {
    name: 'KursKuvanja',
    data()
    {
        return{
            jezik: ''
        }
    },
    created()
    {
        this.jezik = localStorage.getItem("jezik");
    }
}
</script>
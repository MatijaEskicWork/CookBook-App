<template>
    <div class="row">
        <div class="col-12 kurs">
            <img src="@/assets/kurs/chef.jpg" alt="">
            <p id="opis">"...Kursevi traju 6 nedelja, jednom nedeljno u večernjim časovima po 2.5h <br>
                            Časovi su koncipirani oko jela kroz čiju pripremu ćete ovladati tehnikama kuvanja, saznati sve o namirnicama, njihovoj obradi i čuvanju, kombinovanju i uklapanju ukusa, mirisa i tekstura.<br>
                            Organizujemo zajedničke „vannastavne“ aktivnosti (poseta pijaci, mala škola vina…)..."
            </p>
            <span><a href="https://skolakuvanja.com/kursevi-kuvanja/">Više informacija na sajtu</a></span>
        </div>
    </div>
</template>

<style>
    .kurs>img{
        max-width:100%;
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
    name: 'KursKuvanja'
}
</script>
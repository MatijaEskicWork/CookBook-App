<template>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-12 col-lg-4 blog">
            <a href="https://www.milinkuvar.com/liste/lista-recepata/"><h2>#1 - Milin kuvar - Od smutija do pikantnog džema</h2></a>
            <img src="@/assets/blogovi/blog-milin-kuvar.jpeg" alt="" srcset=""><br>
            <p>"Recepti su spojili nas i naše porodice a nismo se nikada sreli. Ovaj blog je zapravo veliki deo mene. Uložila sam mnogo vremena i truda da bismo mogli zajedno da uživamo u tome što nam blog daje – vama inspirativne recepte a meni neiscrpan izvor energije i volje da nastavim da radim ono što najviše volim..."</p>
        </div>
        <div class="col-12 col-lg-4 offset-lg-1 blog">
            <a href="https://sonjasillyworld.com/kategorija/blog/"><h2>#2 - Silly World - recepti, stilizovanje i fotografija</h2></a>
            <img src="@/assets/blogovi/blog-moj-ritual.jpeg" alt="" srcset="">
            <p>"...Odlučila sam da otvorim svoj blog na kojem bih imala zadatak da svake nedelje okačim po nekoliko slika i najdražih recepata. Ni malo se ne šalim kada vam kažem da tada nisam ni znala šta je to blog..."</p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-12 col-lg-4 blog">
            <a href="http://www.proverenirecepti.com/p/dobar-dan.html"><h2>#3 - Provereni recepti - sva omiljena jela uz korisne savete</h2></a>
            <img src="@/assets/blogovi/blog-provereni-recepti.jpg" alt="" srcset="">
            <p>"...Imam tri strasti - kuvanje, pisanje i fotografiju. One su direktno odgovorne za nastanak ovog bloga. Sve što je na njemu objavljeno delo je moje rerne, tastature i fotoaparata..."</p>
        </div>
        <div class="col-12 col-lg-4 offset-lg-1 blog">
            <a href="http://prstohvatsoli.com/"><h2>#4 - Prstohvat soli - svetska, a domaća kuhinja</h2></a>
            <img src="@/assets/blogovi/blog-prstohvat-soli.jpeg" alt="" srcset="">
            <p>"...Odrastajući u kući u kojoj se dobro klopalo, hrana i kuvanje su bili nešto što me je oduvek interesovalo. Intenzivno sam počela da kuvam tek kada sam otišla iz porodičnog doma i tako je vremenom nastao Prstohvat soli. Zašto baš taj naziv? Simbolično i jednostavno, kao neophodan sastojak svakog jela, i slatkog i slanog..."</p>
        </div>
    </div>
</template>

<style>
    .blog{
        margin-right: 100px;
    }
    .blog>img{
        border-radius: 10px;
        width: 70%;
        max-height: 50vh;
        height: auto;

        float: left;
    }
    .blog>a{
        color: aquamarine;
        text-decoration: none;

    }
    .blog>a>h2{
        text-align: left;
        margin-top: 10vh;
        margin-bottom: 2vh;
    }
    .blog>p{
        padding-top: 20px;
        text-align: left;
        float: right;
        font-size: 20px;
    }
</style>

<script>
export default {
    name: 'Blogovi'
}
</script>
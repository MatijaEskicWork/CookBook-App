<template>
<div v-if="this.jezik == 'srpski'">
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
</div>
<div v-else>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-12 col-lg-4 blog">
            <a href="https://www.milinkuvar.com/liste/lista-recepata/"><h2># 1 - Mila's cookbook - From smoothies to spicy jam</h2></a>
            <img src="@/assets/blogovi/blog-milin-kuvar.jpeg" alt="" srcset=""><br>
            <p>"Recipies connected us and our families, but we have never met. This blog is actually a big part of me. I've putted so much effort so we could enjoy together what the blog gives us - inspiring recipes and an inexhaustible source of energy and will for me to continue doing what I love the most... "</p>
        </div>
        <div class="col-12 col-lg-4 offset-lg-1 blog">
            <a href="https://sonjasillyworld.com/kategorija/blog/"><h2>#2 - Silly World - recipies, styling and photos</h2></a>
            <img src="@/assets/blogovi/blog-moj-ritual.jpeg" alt="" srcset="">
            <p>"...I decided to open my own blog where I would have the task of posting a few pictures and my favorite recipes every week. I'm not kidding when I tell you that I didn't even know what a blog was then ..."</p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-12 col-lg-4 blog">
            <a href="http://www.proverenirecepti.com/p/dobar-dan.html"><h2>#3 - Trusted recipies - all favourite dishes with useful advices</h2></a>
            <img src="@/assets/blogovi/blog-provereni-recepti.jpg" alt="" srcset="">
            <p>"...I have three passions - cooking, writing and photography. They are directly responsible for the creation of this blog. Everything published on it is the work of my oven, keyboard and camera..."</p>
        </div>
        <div class="col-12 col-lg-4 offset-lg-1 blog">
            <a href="http://prstohvatsoli.com/"><h2>#4 - A pinch of salt - international but domestic cuisine</h2></a>
            <img src="@/assets/blogovi/blog-prstohvat-soli.jpeg" alt="" srcset="">
            <p>"...Growing up in a house where food was good, food and cooking were something that always interested me. I started cooking intensively only when I left the family home, and so over time, a pinch of salt was created. Why that name? Symbolically and simply, as a necessary ingredient of every dish, both sweet and salty..."</p>
        </div>
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
    name: 'Blogovi',
    data()
    {
        return{
            jezik:''
        }
    },
    created()
    {
        if(localStorage.getItem("jezik") != null)
        {
            this.jezik = localStorage.getItem("jezik");
            alert(this.jezik);
        }
        else
        {
            this.jezik = "srpski";
            localStorage.setItem("jezik", "srpski");
        }
    }
}
</script>
<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-dark" style="user-select: auto;">
      <a class="navbar-brand" href="/" style="user-select: auto;"><img id="logo-navbar" src="@/assets/logo.png" alt="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation" style="user-select: auto;">
        <span class="navbar-toggler-icon" style="user-select: auto;"></span>
      </button>
      <div class="navbar-collapse collapse show" id="navbarColor01" style="user-select: auto;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="user-select: auto;">
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="/">Početna</router-link>
              </button>
          </li>
          <li class="nav-item text-center" style="user-select: auto;" @mouseover="mouseover" @mouseout="mouseout">
            <div class="input-group mb-3">
              <button class="btn dropdown-toggle" id="button-recepti" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <router-link class="moj-nav-link" to="#">Recepti</router-link>
              </button>
              <ul class="dropdown-menu" id="dropdown-tipovi-jela">
                <li><router-link class="moj-nav-link" :to="'/predjela'">Predjelo</router-link></li>
                <li><router-link class="moj-nav-link" :to="'/glavnaJela'">Glavno jelo</router-link></li>
                <li><router-link class="moj-nav-link" :to="'/deserti'">Desert</router-link></li>
                <li><router-link class="moj-nav-link" :to="'/uzine'">Užina</router-link></li>
              </ul>
            </div>
          </li>
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="#">Dodaj recept</router-link>
              </button>
          </li>
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="/nalog">Moj nalog</router-link>
              </button>
          </li>
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="#">O nama</router-link>
              </button>
          </li>
        </ul>
        <!--<form class="d-flex" style="user-select: auto;">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="user-select: auto;">
          <button class="btn btn-outline-light" type="submit" style="user-select: auto;">Search</button>
        </form>
        !-->
        <select class="#" name="jezik" id="lista-jezik">
            <option value="srpski">Srpski</option>
            <option value="engleski">English</option>
        </select>
      </div>
  </nav>
  </div>
</template>

<style>
.navbar{
  padding-left: 17%;
  padding-right: 17%;
  background-color: rgba(122, 62, 62, 0.7);
  position: sticky;
  top: 0;
  z-index: 100;
}

#logo-navbar{
  width: 50px;
  object-fit: contain;
}

.moj-nav-link{
    text-align: center;
    color: white;
    text-decoration: unset;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#dropdown-tipovi-jela{
  background-color: rgba(122, 62, 62, 0.7);
  z-index: 90;
}

#lista-jezik{
  width: 100px;
}
</style>

<script>
export default {
  name: 'Header',
  components: {
    
  },
  methods:{
    mouseover(){
      $('#button-recepti').addClass('show').attr('aria-expanded', 'true');
      $('#dropdown-tipovi-jela').addClass('show').attr('data-bs-popper', 'none');
    },
    mouseout(){
      $('#button-recepti').removeClass('show').attr('aria-expanded', 'false');
      $('#dropdown-tipovi-jela').removeClass('show').removeAttr('data-bs-popper');
    }
  }
}

</script>

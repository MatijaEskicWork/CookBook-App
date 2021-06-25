<template>
  <div class="row">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="user-select: auto;">
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
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="#">Recepti</router-link>
              </button>
          </li>
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="#">Dodaj recept</router-link>
              </button>
          </li>
          <li class="nav-item" style="user-select: auto;">
              <button class="btn">
                  <router-link class="moj-nav-link" to="#">Moj nalog</router-link>
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

#lista-jezik{
  width: 100px;
}
</style>

<script>
export default {
  name: 'Header',
  components: {
    
  }
}

</script>

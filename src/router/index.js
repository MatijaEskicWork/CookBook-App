import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import MojNalog from '../views/MojNalog.vue'

const routes = [
  {
    path: '/',
    name: 'Pocetna',
    component: Pocetna
  },
  {
    path: '/nalog',
    name: 'MojNalog',
    component: MojNalog
  },
  /*{
    path: '/recept/:id',
    name: 'Recept'
  },*/
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Pocetna from '../views/Pocetna.vue'
import MojNalog from '../views/MojNalog.vue'
import Recepti from '../views/Recepti.vue'
import Deserti from '../views/Deserti.vue'
import Predjela from '../views/Predjela.vue'
import GlavnaJela from '../views/GlavnaJela.vue'
import Uzine from '../views/Uzine.vue'

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

  {
    path: '/recepti/:link',
    name: 'Recepti',
    props: true,
    component: Recepti
  },

  {
    path: '/deserti',
    name: 'Deserti',
    component: Deserti
  },
  {
    path: '/glavnaJela',
    name: 'GlavnaJela',
    component: GlavnaJela
  },
  {
    path: '/predjela',
    name: 'Predjela',
    component: Predjela
  },
  {
    path: '/uzine',
    name: 'Uzine',
    component: Uzine
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

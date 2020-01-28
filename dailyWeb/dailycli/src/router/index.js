import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Week from '../views/information/WeekInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect:'/week'
    name: 'home',
    component: Home
  },
  {
    path: '/week',
    name: 'Week',
    component: Week
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/monitor',
    component: () => import(/* webpackChunkName: "about" */ '../views/information/monitor.vue')
  },
  {
    path: '/collection',
    component: () => import(/* webpackChunkName: "about" */ '../views/information/collection.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

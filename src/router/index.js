import { createRouter, createWebHistory } from 'vue-router'
import HomeStart from '../views/HomeStart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeStart
  },
  {
    path: '/stepverify',
    name: 'stepverify',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   {
    path: '/InsertData',
    name: 'InsertData',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HelloView.vue')
  },
   {
    path: '/Editcompo',
    name: 'Editcomp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditView.vue')
  },
   {
    path: '/Result',
    name: 'Result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ResultView.vue')
  },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

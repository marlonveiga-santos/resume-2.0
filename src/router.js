import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home-en',
      name: 'HomeEn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/HomeEn.vue')
    },
    {
      path: '/formacao-experiencia',
      name: 'ExpPt',
      component: () => import('./pages/ExpPt')
    },
    {
      path: '/scholarship-experience',
      name: 'ExpEn',
      component: () => import('./pages/ExpEn')
    },
    
  ]
})
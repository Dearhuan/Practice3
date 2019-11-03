import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import( '../views/classify.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import( '../views/cart.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( '../views/mine.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( '../views/login.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import( '../views/regist.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import( '../views/checkout.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import( '../views/isearch.vue'),
      meta:{
        requireAuth: false
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import( '../views/detail.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import( '../views/pay.vue'),
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/index',
      redirect: '/'
    }
  ]
})

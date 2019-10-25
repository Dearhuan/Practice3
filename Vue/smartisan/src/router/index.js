import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import( '../views/classify.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import( '../views/cart.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( '../views/mine.vue')
    },
    {
      path: '/index',
      redirect: '/wechat'
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Wechat from '@/views/wechat.vue'
import Login from '@/components/verifybox.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'wechat',
      component: Wechat
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../views/contact.vue')
    },
    {
      path: '/find',
      name: 'find',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../views/find.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../views/mine.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../components/verifybox.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../views/detail.vue')
    },
    {
      path: '/wechat',
      redirect: '/wechat'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: '懒加载分组名' */ '../components/verifybox.vue')
  }] 
})

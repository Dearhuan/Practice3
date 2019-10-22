import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: '懒加载分组名' */ '../components/verifybox/verifybox.vue')
    }
  ]
})
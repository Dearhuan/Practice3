// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import radius from './directives/radius'
import 'weui'
import './assets/styles.css'
import './assets/loginbox.css'

Vue.config.productionTip = false
//全局自定义指令
Vue.directive('radius', radius)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

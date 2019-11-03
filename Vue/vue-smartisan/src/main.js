// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import './assets/style/base.css'
import 'mint-ui/lib/style.min.css'
import './assets/font/iconfont.css'

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

Vue.use(mintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

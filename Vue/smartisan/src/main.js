// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import axios from 'axios'
import store from './store'
import './assets/style/base.css'
import 'mint-ui/lib/style.min.css'
import './assets/font/iconfont.css'

import {
  Header
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.prototype.axios = axios;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.setToken = function (tokenName, tokenValue) {
  if (window.localStorage) {
    localStorage.setItem(tokenName, tokenValue);
  } else {
    alert('该浏览器不支持LocalStorage');
  }
};
Vue.prototype.getToken = function (name) {
  let token = localStorage.getItem(name);
  if (token) {
    return token;
  } else {
    return '';
  }
};
Vue.prototype.setCookie = function (c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value);
  expires = " + exdate.toGMTString() + ";
  path = "/";
};
Vue.prototype.getCookie = function (c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=")
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1
      c_end = document.cookie.indexOf(";", c_start)
      if (c_end == -1)
        c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ""
};
Vue.prototype.checkCookie = function (c_name) {
  username = getCookie(c_name);
  console.log(username);
  if (username != null && username != "") {
    return true;
  } else {
    return false;
  }
};
Vue.prototype.clearCookie = function(name){
  this.setCookie(name,"",-1);
}

Vue.use(mintUI);

Vue.config.productionTip = false

// 挂载路由守卫
router.beforeEach((to, from, next) => {
  setTimeout((res) => {
    if (to.meta.requireAuth) {
      if (store.state.isLogin) {
        next();
      } else {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      }
    } else {
      next();
    }
  }, 100)
});


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  created() {
    if (this.getToken('isLogin') == null) {
      this.setToken('isLogin', '');
    }
    this.$store.state.isLogin = this.getToken('isLogin');
    console.log('isLogin:', this.$store.state.isLogin);
  },
})

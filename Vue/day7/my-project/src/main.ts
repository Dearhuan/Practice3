import Vue from "vue";
// 最外层组件
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// 全局样式
import './assets/app.css'
import './assets/base.css'
import './assets/cards.css'

Vue.config.productionTip = false;

new Vue({
  // 路由
  router,
  // 状态管理
  store,
  render: h => h(App)
}).$mount("#app");

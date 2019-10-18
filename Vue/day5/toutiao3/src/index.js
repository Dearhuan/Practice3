import Vue from 'vue/dist/vue'
import 'weui'
import './styles/style.css'
//公共组件
import './components/header/header'
import './components/search/search'
import './components/list/list'
import './components/list2/list2'
import './components/swiper/swiper'
import './components/footer/footer'
//页面组件
import './pages/wechat/wechat'
import './pages/concact/concact'
import './pages/find/find'
import './pages/mine/mine'
import './pages/main/main'


//创建根节点
new Vue({
  el: '#app',
  template: `
    <div>
      <i-main></i-main>
      <i-footer></i-footer>
    </div>
  `
})
import Vue from 'vue'
import 'weui'
import './styles/styles.css'
// 共有组件
import Tabbar from './components/tabbar/tabbar.vue'
// 页面组件
import Main from './pages/main/main.vue'

new Vue({
    el: '#app',
    render(h) {
        return h('div', null, [
            h(Main),
            h(Tabbar)
        ])
    },
    components: {
        Tabbar,
        Main
    }
})
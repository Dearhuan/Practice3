import Vue from 'vue/dist/vue'
// 导出组件
export default Vue.component('i-header', {
  props: {
    color: String
  },
  data() {
    return {
      title: '今日头条'
    }
  },
  // template: `<header>{{title}}</header>`
  template: `<header :style="{backgroundColor:color}">
              <slot></slot>
            </header>`
})
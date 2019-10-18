import Vue from 'vue/dist/vue'
export default Vue.component('i-wechat', {
  props: [],
  template: `
    <div>
      <i-header color="#27c180">WeChat</i-header>
      <i-search></i-search>
      <i-list></i-list>
    </div>
  `
})
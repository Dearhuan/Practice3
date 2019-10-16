import Vue from 'vue/dist/vue'
import template from './search.html'

const search = new Vue({
  el: '#search',
  data: {
    isFocus: false,
    searchTxt: '',
    cancel: '取消',
    title: 'hello'
  },
  template,
  methods: {
    toggleFocus(){
      this.isFocus = !this.isFocus
    },
    clear(){
      this.searchTxt = ''
    }
  },
});

export default search
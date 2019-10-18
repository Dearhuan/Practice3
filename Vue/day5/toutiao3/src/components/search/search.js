import Vue from 'vue/dist/vue'
import template from './search.html'
import observer from '../../libs/observer'

export default Vue.component('i-search',{
  data(){
    return {
      isFocus: false,
      searchTxt: '',
      cancel: '取消',
      title: 'hello'
    } 
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
  watch: {
    searchTxt(){
      observer.emit('setSearchTxt',this.searchTxt)
    }
  }
});

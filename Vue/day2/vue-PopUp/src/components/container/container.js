import Vue from 'vue/dist/vue'
import template from './container.html'

const container = new Vue({
  el: '#container',
  data: {
    isOpen: false,
    isOpen2: false,
    mask: false,
    mask2: false
  },
  template,
  methods: {
    toggleOpen(){
      this.isOpen = !this.isOpen
      this.mask = !this.mask
    },
    toggleOpen2(){
      this.isOpen2 = !this.isOpen2
      this.mask2 = !this.mask2
    },
    toggleMask(){
      this.isOpen = !this.isOpen
      this.mask = !this.mask
    },
    toggleMask2(){
      this.isOpen2 = !this.isOpen2
      this.mask2 = !this.mask2
    }
  },
})

export default container
import Vue from 'vue/dist/vue'
import observer from '../../libs/observer'
export default Vue.component('i-main', {
  data() {
    return {
      tabbar: 'i-wechat'
    }
  },
  template: `
    <div>
      <keep-alive>
         <component :is="tabbar"></component>
      </keep-alive>
    </div>
  `,
  mounted() {
    //挂载之后的操作（dom和data全部上来）
    observer.on('setTabbar', (index) => {
      switch (index) {
        case 0:
          this.tabbar = 'i-wechat';
          break;
        case 1:
          this.tabbar = 'i-concact';
          break;
        case 2:
          this.tabbar = 'i-find';
          break;
        case 3:
          this.tabbar = 'i-mine';
          break;
      }
      console.log(index)
    })
  },
})
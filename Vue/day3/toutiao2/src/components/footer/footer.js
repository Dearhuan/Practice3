import Vue from 'vue/dist/vue'
import template from './footer.html'
import icon from '../../images/icon_tabbar.png'

const footer = new Vue({
  el: '#footer',
  data: {
    icon,
    rank: 0,
    tabs: [{
        title: '微信',
        url: '/wechat',
        num: 8,
        dot: false
      },
      {
        title: '通讯录',
        url: '/link',
        num: 0,
        dot: false
      },
      {
        title: '发现',
        url: '/find',
        num: 0,
        dot: true
      },
      {
        title: '我',
        url: '/mine',
        num: 0,
        dot: false
      }  
    ]
  },
  template,
  methods: {
    hightLight(index){
      this.rank = index;
      console.log(index)
    }
  },
});


export default footer
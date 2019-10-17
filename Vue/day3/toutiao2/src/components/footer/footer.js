import Vue from 'vue/dist/vue'
import template from './footer.html'
import icon from '../../images/icon_tabbar.png'

const footer = new Vue({
  el: '#footer',
  data: {
    icon,
    rank: 0,
    cName: 'we-chat',
    tabs: [{
        title: '微信',
        url: '/wechat',
        num: 8,
        dot: false,
        cName: 'we-chat',
      },
      {
        title: '通讯录',
        url: '/link',
        num: 0,
        dot: false,
        cName: 'con-cat',
      },
      {
        title: '发现',
        url: '/find',
        num: 0,
        dot: true,
        cName: 're-covery',
      },
      {
        title: '我',
        url: '/mine',
        num: 0,
        dot: false,
        cName: 'my-mine',
      }  
    ]
  },
  template,
  methods: {
    hightLight(index,cName){
      this.rank = index;
      this.cName = cName;
      console.log(index,cName)
    }
  },
});


export default footer
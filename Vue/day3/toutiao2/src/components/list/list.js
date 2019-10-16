import Vue from 'vue/dist/vue'
import template from './list.html'
import axios from 'axios'

const list = new Vue({
  el: '#list',
  data: {
    news: [],
    page: 1
  },
  template,
  methods: {
    getNews(){
      axios.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page: this.page++,
          tab: 'job',
          limit: 10
        }
      }).then((res)=>{
        this.news = [...this.news,...res.data.data];
        console.log(res)
      })
    }
  },
});

list.getNews();
export default list
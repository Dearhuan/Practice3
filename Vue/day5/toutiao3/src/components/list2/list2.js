import Vue from 'vue/dist/vue'
import template from './list2.html'
import axios from 'axios'

export default Vue.component('i-list2', {
  data() {
    return {
      news: [],
      page: 1,
    }
  },
  template,
  methods: {
    getNews() {
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: this.page++,
          tab: 'ask',
          limit: 10
        }
      }).then((res) => {
        // 数组的解构和合并
        this.news = [...this.news, ...res.data.data];
        console.log(res)
      })
    }
  },
  //挂载之后
  mounted() {
    this.getNews();
  },
});


import Vue from 'vue/dist/vue'
import template from './list.html'
import axios from 'axios'
import observer from '../../libs/observer';

export default Vue.component('i-list', {
  data() {
    return {
      news: [],
      page: 1,
      searchTxt: ''
    }
  },
  template,
  methods: {
    getNews() {
      axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          page: this.page++,
          tab: 'job',
          limit: 10
        }
      }).then((res) => {
        // 数组的解构和合并
        this.news = [...this.news, ...res.data.data];
        console.log(res)
      })
    }
  },
  computed: {
    newsComputed() {
      // console.log(searchTxt);
      if (this.searchTxt) {
        // 数组的filter过滤，返回满足条件的，结果为数组
        return this.news.filter((item) => {
          if (item.title.indexOf(this.searchTxt) != -1) {
            return item
          }
        })
      } else {
        return this.news
      }
    }
  },
  //挂载之后
  mounted() {
    console.log(observer);
    observer.on('setSearchTxt', (searchTxt) => {
      this.searchTxt = searchTxt
    })

    this.getNews();
  },
});


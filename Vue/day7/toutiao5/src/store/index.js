import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    info: 'this is Vuex state',
    galleryStatus: {
      imgUrl: '',
      isShow: false
    },
    news: []
  },
  getters: {

  },
  mutations: {
    setGalleryStatus(state, data) {
      state.galleryStatus = data
    },
    getNewsList(type) {
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.page++, //Number 页数
            tab: this.tab, // String 主题分类。目前有 ask share job good
            limit: 10, // Number 每一页的主题数量
            mdrender: false // String 当为 false 时
          }
        })
        .then(data => {
          // 注意this的指向问题，如果是箭头函数，那这里就直接指向外部
          // 相当concat的方法，合并数组
          _self.news = [..._self.news, ...data.data.data];
          console.log(data);
        });
    }
  },
  actions: {
    setGalleryStatus(context, data) {
      context.commit('setGalleryStatus', data)
    }
  }
})

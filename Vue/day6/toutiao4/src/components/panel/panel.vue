<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__bd">
      <a
        v-for="(item,index) in newsComputed"
        :key="index"
        href="javascript:void(0);"
        class="weui-media-box weui-media-box_appmsg"
      >
        <div class="weui-media-box__hd">
          <img class="weui-media-box__thumb" :src="item.author.avatar_url" alt />
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title" v-text="item.title"></h4>
          <p class="weui-media-box__desc">{{item.author.loginname|captian}}</p>
        </div>
      </a>
    </div>
    <div @click="getNews" class="weui-panel__ft">
      <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
        <div class="weui-cell__bd">查看更多</div>
        <span class="weui-cell__ft"></span>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import observer from "../../tools/observer";
export default {
  data() {
    return {
      // 新闻数据
      news: [],
      page: 1,
      searchText: ""
    };
  },
  methods: {
    getNews() {
      let _self = this;
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.page++, //Number 页数
            tab: "ask", // String 主题分类。目前有 ask share job good
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
  computed: {
    newsComputed() {
      console.log(this.searchText);
      // 有搜索值的时候就执行过滤逻辑，否则原封不动返回原数组
      if (this.searchText) {
        return this.news.filter(item => {
          if (item.title.indexOf(this.searchText) != -1) {
            return item;
          }
        });
      } else {
        return this.news;
      }
    }
  },
  mounted() {
    console.log(observer);
    observer.on("setSeatchText", searchText => {
      this.searchText = searchText;
    });
    console.log(this);
    this.getNews();
  },
  filters: {
    // 首字母的大写
    captian(value) {
      // value是放进来要处理的数据
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
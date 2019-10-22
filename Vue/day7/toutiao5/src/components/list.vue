<template>
  <div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">文字组合列表</div>
    <div class="weui-panel__bd">
      <div v-for="(item,index) in news" :key="index" class="weui-media-box weui-media-box_text">
        <h4 class="weui-media-box__title" v-text="item.author.loginname"></h4>
        <p class="weui-media-box__desc" v-text="item.title"></p>
      </div>
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
import axios from 'axios'

export default {
  data() {
    return {
      news: [],
      page: 1,
    }
  },
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
  //挂载之后
  mounted() {
    this.getNews();
  }
}
</script>
<template>
  <ul class="bottom-nav-bar">
    <li
      v-for="(item, index) in items"
      :key="index"
      :id="index"
      @click="goto(index,item.url)"
      :class="['nav-item',{'active': offset === index}]"
    >
      <span :class="item.class"></span>
      <h5 v-text="item.title"></h5>
    </li>
  </ul>
</template>

<script>
import observer from '../tools/observer';
export default {
  props: {
    offset: Number
  },
  data() {
    return {
      items: [
        {
          class: "iconfont icon-shouye",
          title: "首页",
          url: "/"
        },
        {
          class: "iconfont icon-dingdan",
          title: "分类",
          url: "/classify"
        },
        {
          class: "iconfont icon-shangou",
          title: "购物车",
          url: "/cart"
        },
        {
          class: "iconfont icon-mine",
          title: "个人中心",
          url: "/mine"
        }
      ]
    };
  },
  methods: {
    //编程式跳转
    goto(index,url) {
      // this.offset = index;
      this.$router.push(url);
      // observer.emit('setTabbar',index);
    },
  }
};
</script>

<style scoped>
ol,
ul {
  list-style: none;
}
.bottom-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 3.6rem;
  padding: 0 1.7rem;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  -webkit-box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
  box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
}
.bottom-nav-bar .nav-item {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  cursor: pointer;
  margin: 0.6rem 0 0 0;
}
.nav-item.active h5{
   color: #d44d44;
}
.nav-item.active .iconfont{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    color: #d44d44;
}
.iconfont {
  font-size: 1.2rem;
}
h5 {
  color: #9a9a9a;
  margin: 0.2rem 0 0.8rem 0;
}
</style>

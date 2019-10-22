<template>
  <div>
    <Header color="#27c180">Wechat</Header>
    <Search/>
    <Panel></Panel>
    <LoginBox/>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Search from "../components/search.vue";
import Panel from "../components/panel.vue";
import LoginBox from "../components/loginbox.vue"
export default {
  created() {
    window.onscroll = () => {
      sessionStorage.setItem("scrollY", window.scrollY);
    };
  },
  watch: {
    scrollY() {
      console.log("滚动了");
    }
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  // 局部注册
  components: {
    Header,
    Search,
    Panel,
    LoginBox
  }
};
</script>

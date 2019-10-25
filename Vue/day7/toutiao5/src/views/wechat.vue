<template>
  <div>
    <Header color="#27c180">Wechat</Header>
    <Search />
    <Panel tab="ask"></Panel>
    <LoginBox></LoginBox>
    <Tabbar :offset="0" />
    <Gallery />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Search from "../components/search.vue";
import Panel from "../components/panel.vue";
import LoginBox from "../components/loginbox.vue";
import Tabbar from "../components/tabbar.vue";
import Gallery from "../components/gallery.vue";
export default {
  data() {
    return {};
  },
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  // 局部注册
  components: {
    Header,
    Search,
    Panel,
    LoginBox,
    Tabbar,
    Gallery
  }
};
</script>

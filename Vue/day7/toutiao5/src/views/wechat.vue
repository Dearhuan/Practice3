<template>
  <div>
    <Header color="#27c180">Wechat</Header>
    <Search />
    <Panel tab="ask"></Panel>
    <LoginBox></LoginBox>
    <Tabbar :offset="0" />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Search from "../components/search.vue";
import Panel from "../components/panel.vue";
import LoginBox from "../components/loginbox.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  data(){
    return {
      searchBarFixed : false
    }
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
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      let offsetTop = document.querySelector('#searchBar').offsetTop;
      if(scrollTop > offsetTop){
        this.searchBarFixed = true
      }else{
        this.searchBarFixed = false
      }
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  // 局部注册
  components: {
    Header,
    Search,
    Panel,
    LoginBox,
    Tabbar
  }
};
</script>

<template>
  <div>
    <Header></Header>
    <Search></Search>
    <Swiper/>
    <Home />
    <Panel></Panel>
    <BackToTop />
    <Tabbar :offset='0'></Tabbar>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
import Swiper from "../components/Swiper.vue";
import Panel from "../components/Panel.vue";
import Tabbar from "../components/tabbar.vue";
import BackToTop from "../components/BackToTop.vue"
import Home from "../components/Home.vue"

export default {
  data(){
    return {

    }
  },
  components:{
    Header,
    Search,
    Swiper,
    Panel,
    Tabbar,
    BackToTop,
    Home
  }
}
</script>

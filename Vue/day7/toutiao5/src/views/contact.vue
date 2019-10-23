<template>
  <div>
    <Header color="#ff0049">Concact</Header>
    <swiper></swiper>
    <Panel  tab="job"></Panel>
    <Tabbar :offset="1" />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Panel from "../components/panel.vue";
import Tabbar from "../components/tabbar.vue";
import Swiper from "../components/swiper.vue"

export default {
  components: {
    Header,
    Panel,
    Tabbar,
    Swiper
  }
};
</script>
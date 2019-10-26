<template>
  <div>
    <Header2>{{msg}}</Header2>
    <Tabbar :offset="2"></Tabbar>
  </div>
</template>

<script>
import Header2 from "../components/Header2.vue";
import Tabbar from "../components/tabbar.vue";
export default {
  data() {
    return {
      msg: "购物车"
    };
  },
  components: {
    Header2,
    Tabbar
  }
};
</script>
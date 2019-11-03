<template>
  <div>
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
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

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
}
</style>
<template>
  <section @click="gotoSearch" class="search-bar-wrap poss">
    <section class="search-bar">
      <aside class="search-icon"></aside>
      <aside class="search-val">{{msg}}</aside>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "请输入搜索关键字"
    };
  },
  methods: {
    gotoSearch(){
      this.$router.push('search')
    }
  },
};
</script>
<style scoped>
.search-bar-wrap.poss {
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 6;
  padding: 0.4rem;
}
.search-bar-wrap {
  width: 100%;
  max-height: 2.4rem;
  padding: 0 0.5rem 0.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  -webkit-transition: position 0.3s ease-in-out;
  transition: position 0.3s ease-in-out;
}
.search-bar-wrap .search-bar {
  padding: 6px 10px;
  min-height: 1.5rem;
  background: #f5f5f5;
  border: 1px solid #e9e9e9;
  border-radius: 1.55rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.search-bar-wrap .search-icon {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 0.75rem;
  height: 0.75rem;
  margin-top: 1px;
  background: url('../assets/images/search.png') no-repeat 50%;
  background-size: 0.75rem;
}
.search-bar-wrap .search-val {
  color: #b3b3b3;
  font-size: 0.6rem;
  margin-left: 0.4rem;
}
</style>

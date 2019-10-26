<template>
  <div>
    <Header></Header>
    <Tabbar :offset='1'></Tabbar>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Tabbar from "../components/tabbar.vue";
export default {
   components:{
    Header,
    Tabbar
  }
}


</script>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Footer v-if="isShow"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import store from './store/index'
export default {
  name: 'App',
  components:{
    Footer
  },
  data(){
    return {

    }
  },
  computed: {
    isShow(){
      return this.$store.getters.isShow;
    }
  },
  watch:{
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

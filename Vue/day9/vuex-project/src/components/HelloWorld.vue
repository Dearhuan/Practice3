<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2>{{this.$store.state.showFooter}}</h2>
    <h3>{{this.$store.state.changebleNum}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

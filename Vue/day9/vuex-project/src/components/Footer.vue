<template>
  <div>
    <h1 v-text="msg"></h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: 'this is footer'
    }
  }
}
</script>

<style scoped>
  h1{
    width: 100%;
    height: 40px;
    border: 1px solid orange;
    position: fixed;
    bottom: 0;
  }
</style>
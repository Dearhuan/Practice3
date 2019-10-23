<template>
  <div>
    <Header>Detail</Header>
    <h1 v-text="$route.params.id"></h1>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  components:{
    Header
  }
}
</script>
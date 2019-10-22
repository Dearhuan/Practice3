<template>
  <div class="home">
    <Header/>
    <Panel />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Panel from "@/components/Panel.vue";

export default {
  name: "home",
  components: {
    Header,
    Panel
  }
};
</script>

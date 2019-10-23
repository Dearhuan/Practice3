<template>
  <div>
    <Header color="#e6c562">Find</Header>
    <Panel tab="share"></Panel>
    <Tabbar :offset="2" />
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Tabbar from "../components/tabbar.vue"
import Panel from "../components/panel.vue"

export default {
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Tabbar,
    Panel
  }
};
</script>
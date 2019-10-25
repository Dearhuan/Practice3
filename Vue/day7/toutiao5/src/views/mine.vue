<template>
  <div>
    <Header color="#576b95">Mine</Header>
    <Panel tab="good" />
    <Tabbar :offset="3" />
    <Gallery/>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Tabbar from "../components/tabbar.vue"
import Panel from "../components/panel.vue"
import Gallery from "../components/gallery.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Tabbar,
    Panel,
    Gallery
  }
};
</script>
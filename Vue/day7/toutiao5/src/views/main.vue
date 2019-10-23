<template>
  <div>
    <keep-alive>
      <component :is="tabbar"></component>
    </keep-alive>
  </div>
</template>
<script>
import Wechat from "./wechat.vue";
import Contact from "./contact.vue";
import Find from "./find.vue";
import Mine from "./mine.vue";
import observer from "../tools/observer";
import "../assets/styles.css";
export default {
  data() {
    return {
      tabbar: "Wechat"
    };
  },
  // 挂载之后运行
  mounted() {
    observer.on("setTabbar", index => {
      switch (index) {
        case 0:
          this.tabbar = "Wechat";
          break;
        case 1:
          this.tabbar = "Contact";
          break;
        case 2:
          this.tabbar = "Find";
          break;
        case 3:
          this.tabbar = "Mine";
          break;
      }
      // console.log(index)
    });
  },
  components: {
    Wechat,
    Contact,
    Find,
    Mine
  }
};
</script>


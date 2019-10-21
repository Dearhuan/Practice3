<template>
  <div>
    <keep-alive>
      <component :is="tabbar"></component>
    </keep-alive>
  </div>
</template>
<script>
import Wechat from '../wechat/wechat.vue';
import Contact from '../contact/contact.vue';
import observer from "../../tools/observer";
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
      }
      // console.log(index)
    });
  },
  components:{
    Wechat,
    Contact
  }
};
</script>
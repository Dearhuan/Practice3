<template>
  <div class="container" @click="clickHandle">
    <div class="message">{{msg}}</div>
    <!-- 使用 click-counter 组件 -->
    <ClickCounter :init-num="10" @click="handleClickNum">
      <input type="checkbox" /> 禁用
    </ClickCounter>
    <ClickCounter :init-num="20" @click="handleClickNum"/>
    <ClickCounter :init-num="30" @click="handleClickNum"/>
  </div>
</template>

<script>
// 导入 click-counter 组件
import ClickCounter from "@/components/click-counter";

export default {
  // 声明在当前组件下使用 counter-click 组件
  components: { ClickCounter },

  data() {
    return {
      msg: "Hello"
    };
  },

  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!!";
    },
    handleClickNum(data){
      console.log('>>>>>',data.num)
    }
  }
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10px;
  text-align: center;
}
</style>
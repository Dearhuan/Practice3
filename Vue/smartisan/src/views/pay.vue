<template>
  <div>
    <mt-header title="支付中心">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="code">
      <img :src="codeImage[active]" alt />
    </div>
  </div>
</template>

<script>
import wechatPay from "../assets/images/wechatpay.png";
import aliPay from "../assets/images/alipay.jpg";
export default {
  data() {
    return {
      active: 0,
      codeImage: [wechatPay, aliPay , aliPay]
    };
  },
  created() {
    console.log(this.$store.state.payMethod);
    this.active = this.$store.state.payMethod;      //根据支付方式设置对应二维码
  }
};
</script>

<style scoped>
header {
  height: 3.2rem;
  padding: 0 10px;
  font-size: 18px;
  line-height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
}
.code {
  width: 100vw;
  height: 140vw;
  margin-top: 3.2rem;
}
.code img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
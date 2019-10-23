<template>
  <div class="login-box">
    <!-- <a class="m-btn m-btn-blue login-btn">登录/注册</a> -->
    <router-link class="m-btn m-btn-blue login-btn" :to="{ name: 'login'}">登录/注册</router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.login-box {
  position: fixed;
  width: 100%;
  max-width: 750px;
  bottom: 5.6rem;
  text-align: center;
}
.m-btn {
  text-align: center;
  line-height: 2.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  border-radius: 1.2rem;
  outline: 0;
  display: inline-block;
  min-width: 7.375rem;
  box-sizing: border-box;
  padding: 0;
}
.m-btn-blue {
  color: #fff;
  background: linear-gradient(to right, #4294ea 0, #52b4eb 100%);
  border: 0 solid transparent;
}
.login-btn[data-v-1afbad54] {
  width: 8.125rem;
  height: 2.375rem;
  line-height: 2.375rem;
  font-size: 1rem;
  opacity: 0.98;
}
</style>
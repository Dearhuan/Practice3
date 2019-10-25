<template>
  <header>
    <figure class="logo"></figure>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 2.4rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
header .logo {
  width: 1.4rem;
  height: 1.4rem;
  background: url('../assets/images/tlogo.png')no-repeat 50%;
  background-size: 1.4rem;
}

figure {
  margin: 0;
}
</style>

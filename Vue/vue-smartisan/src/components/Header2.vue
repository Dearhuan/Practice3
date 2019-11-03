<template>
  <div _ngcontent-c1 class="title-bar">
    <h1 _ngcontent-c1 class="nav-title">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    }
  },
};
</script>

<style scoped>
.title-bar[_ngcontent-c1] {
    background: #1d1d1d;
    background-image: linear-gradient(#1d1d1d,#181818);
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 199;
}
.title-bar[_ngcontent-c1] .nav-title[_ngcontent-c1] {
    color: #fff;
    font-size: 18px;
    line-height: 20px;
    padding: 16px 0 0;
    margin: 0;
    text-align: center;
    position: absolute;
    top: 0;
    left: 60px;
    right: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
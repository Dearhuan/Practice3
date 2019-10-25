<template>
  <ul class="bottom-nav-bar">
    <li id="0" class="nav-item active">
      <figure class="icon icon-index"></figure>
      <h5>首页</h5>
    </li>
    <li id="1" class="nav-item">
      <figure class="icon icon-category"></figure>
      <h5>分类</h5>
    </li>
    <li id="2" class="nav-item">
      <figure class="icon icon-cart"></figure>
      <h5>购物车</h5>
    </li>
    <li id="3" class="nav-item">
      <figure class="icon icon-user"></figure>
      <h5>个人中心</h5>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ol, ul {
    list-style: none;
}
.bottom-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 2.7rem;
  padding: 0 1.7rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  -webkit-box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
  box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
}
.bottom-nav-bar .nav-item {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    cursor: pointer;
}
.nav-item.active .icon-index[data-v-655a005d] {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIW…RXUBLUGtyCI3O9W+of7zV16C4sFfW2dffSAoZhGIZhVoYf816Nh+pMFPAAAAAASUVORK5CYII=) no-repeat;
    background-size: contain;
}
.nav-item.active .icon[data-v-655a005d] {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

.icon.icon-index[data-v-655a005d] {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIW…UHaCczL33lY5RTtd8Er9frRRzHMwjbMU3Tb5AkSZKk//0B1TQrKVOVvjcAAAAASUVORK5CYII=) no-repeat;
    background-size: contain;
}
.icon[data-v-655a005d] {
    display: block;
    margin: .3rem auto .2rem;
    width: 27px;
    height: 27px;
}
.nav-item.active h5[data-v-655a005d] {
    color: #d44d44;
    font-size: 36px;
}

.bottom-nav-bar .nav-item h5[data-v-655a005d] {
    color: #9a9a9a;
    font-size: 34px;
    font-weight: 700;
    position: relative;
    width: 300%;
    left: -100%;
    line-height: 40px;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(.33333);
    transform: scale(.33333);
}
</style>

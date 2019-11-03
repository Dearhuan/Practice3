<template>
  <aside class="back-to-top" v-if="btnFlag" @click="backTop"></aside>
</template>

<script>
export default {
  data(){
    return {
      btnFlag: false
    }
  },
  methods: {
    backTop(){
      const that = this;
      let timer = setInterval(()=>{
        let ispeed = Math.floor(-that.scrollToTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
        if(that.scrollTop === 0){
          clearInterval(timer);
        }
      },16)
    },
    scrollToTop(){
      const that = this;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      that.scrollTop = scrollTop;
      if(that.scrollTop > 100){
        that.btnFlag = true;
        // console.log(this.scrollTop)
      }else{
        that.btnFlag = false;
      }
    }
  },
   mounted() {
    window.addEventListener('scroll',this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll',this.scrollToTop)
  },
};
</script>

<style scoped>
.back-to-top {
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  position: fixed;
  right: 0.8rem;
  bottom: 12.3rem;
  background: #fff;
  -webkit-box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.06);
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  opacity: 1;
  -webkit-transform: translate3d(0, 120px, 0);
  transform: translate3d(0, 120px, 0);
  -webkit-transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  scroll-behavior: smooth;
}
.back-to-top::before {
  content: "O";
  font-family: SmartisanIconFont;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.back-to-top::after {
  content: "";
  position: absolute;
  top: -1rem;
  left: -1rem;
  right: -1rem;
  bottom: -1rem;
}
.back-to-top.active {
  opacity: 1;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
</style>
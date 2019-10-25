<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <img src="../assets/images/banner1.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/banner2.png" alt />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/images/banner3.png" alt />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination1",
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        spaceBetween: 0,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        //循环
        loop: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 0, false);
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
  height: 11rem;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: .6rem;
}
</style>
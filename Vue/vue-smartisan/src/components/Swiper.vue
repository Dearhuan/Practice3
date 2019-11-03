<template>
  <swiper :options="swiperOption" ref="mySwiper">
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
        centeredSlides: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动播放
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true
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
  computed: {},
  mounted() {},
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

.swiper-slide{
  width: 100%;
}
.swiper-slide img {
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 100%;
  border-radius: 0.6rem;
}
</style>
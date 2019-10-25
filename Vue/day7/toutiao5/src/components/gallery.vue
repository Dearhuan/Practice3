<template>
  <transition name="bounce">
    <div class="weui-gallery-diy" v-show="galleryStatus.isShow">
      <span
        class="weui-gallery__img"
        :style="{
      backgroundImage: `url(${galleryStatus.imgUrl})`
    }"
      ></span>
      <div
        @click="setGalleryStatus({
      imgUrl:'',
      isShow: false
    })"
        class="weui-gallery__opr"
      >
        <a href="javascript:" class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      galleryStatus: state => state.galleryStatus
    })
  },
  methods: {
    ...mapActions(["setGalleryStatus"])
  }
};
</script>

<style scoped>
.weui-gallery-diy {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000000;
  z-index: 1000;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
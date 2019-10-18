import Vue from 'vue/dist/vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import template from './swiper.html'

Vue.use(VueAwesomeSwiper);

export default Vue.component('i-swiper',{
  data(){
    return {
      swiperOption:{

      }
    }
  },
  template,
  methods: {
    
  },
  computed: {
    swiper(){
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('this is current swiper instance object',this.swiper)
    this.swiper.slideTo(3,1000,false)
  },
})
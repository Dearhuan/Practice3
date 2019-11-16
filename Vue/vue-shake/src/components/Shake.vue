<template>
  <div class="hello">
    <h4>手机摇一摇</h4>
    <div>
      <audio src="../assets/5018.mp3" ref="shakeAudio">
        您的浏览器不支持audio标签
      </audio>
    </div>
  </div>
</template>

<script>
import Shake from 'shake.js'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    let myShakeEvent = new Shake({
      threshold: 20,
      timeout: 1200
    })
    myShakeEvent.start();
    window.addEventListener('shake',this.shakeEventDidOccur,false)
  },
  methods: {
    shakeEventDidOccur(){
      let audio = this.$refs.shakeAudio;
      if(window.navigator.vibrate){
        navigator.vibrate(500)
      }
      audio.play()
    }
  },
}
</script>
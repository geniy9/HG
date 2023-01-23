<template>
  <div class="video_section">
    <video class="hermitage_video" autoplay loop>
      <source src="/src/assets/video/hermitage_home_interiors.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  name: 'HomeSectionVideo',
  mounted() {
    this.speedMotion();
  },
  methods: {
    speedMotion() {
      let vid = document.querySelector('.hermitage_video');
      vid.playbackRate = 0.5;
    }
  }
}
</script>
<style scoped>
.video_section {
  position: relative;
  width: 100%;
  height: 100vh;
}
.hermitage_video {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
</style>
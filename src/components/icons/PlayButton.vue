<template>
  <svg version="1.1" class="play_button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" :width="iconWidth">
    <path class="play_cyrcle" :class="{active: !playStatus}" d="M292.51,150c0,78.7-63.8,142.5-142.5,142.5S7.51,228.7,7.51,150S71.31,7.5,150.01,7.5S292.51,71.3,292.51,150z"/>
    <path v-if="playStatus" class="play_path" d="M101.98,231.97V66.88l142.97,82.54L101.98,231.97z"/>
    <path v-else class="play_path" d="M124,90 124,210 M176,90 176,210z"/>
  </svg>
</template>
<script>
export default {
  name: 'PlayButton',
  props: {
    iconWidth: {
      type: String,
      default: '100px'
    },
    playStatus: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped lang="scss">
$stroke: 1000;
.play_button { 
  width: 100%;
  border-radius: 50%;
  background: rgba(0,0,0,.1);
}
.play_cyrcle, .play_path {
  fill: none;
  stroke:#fff;
  stroke-width: 6;
  stroke-miterlimit: 10;
  transition: 1s;
}
.video_button_icon:hover .play_cyrcle, 
.video_button_icon:hover .play_path {
  transition: .5s;
}
.play_cyrcle.active {
  animation-name: play_animate;
  stroke-dasharray: $stroke;
  stroke-dashoffset: $stroke;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 6s;
  animation-fill-mode: both;
  transform-origin: 50% 50% 0;
  transition: 1s;
}
@keyframes play_animate {
  from { stroke-dashoffset: $stroke; transform: rotate(0); }
  to { stroke-dashoffset: 0; transform: rotate(-720deg); }
}
</style>
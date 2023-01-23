<template>
  <div class="preload_bg">
    <hermitage-logo id="preload_logo" class="preloader"></hermitage-logo>
    <div class="loading_line"><span>{{ counter }}%</span></div>
  </div>
</template>
<script>
import HermitageLogo from '@/components/logo/HermitageLogo'
export default {
  name: 'PreloaderDrawLogo',
  components: {
    HermitageLogo
  },
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    var that = this;
    document.addEventListener("DOMContentLoaded", function(){
      that.progressLoading();
      var tl = new TimelineMax({repeat: 0, repeatDelay: 5})
      tl
      .to('#preload_logo', 6, { scale: 1, transformOrigin: 'center center' }, '-=3')
      .to('#preload_logo', 0.5, { opacity: 0 }, '-=1')

      var hideLogo = setTimeout(function(){
        var hideLogo = new TimelineMax();
        hideLogo
        .to('#preload_logo', 0.5, { autoAlpha: 0, onComplete: loadPage })
        .to('.preload_bg', 0.2, { scaleY: 0.001, transformOrigin: 'center center' })
        .to('.preload_bg', 0.3, { scaleX: 0, transformOrigin: 'center center' })
        .to('.preload_bg', 0, { zIndex: 0 })
        .to('#preload_logo', 0, { zIndex: 0 })
      }, 5000)
    });
    function loadPage() {
      that.$emit('preloder-complete');
    }
  },
  methods: {
    progressLoading() {
      let progressInterval = setInterval(this.progressTick, 40);
      this.counter >= 100 ? clearInterval(progressInterval) : this.counter;
    },
    progressTick() {
      this.counter >= 100 ? this.counter : this.counter = this.counter + 1;
    }
  }
}
</script>
<style>
.preload_bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #000000;
  background-size: 400% 400%;
  z-index: 9;
}
.preloader .hermitage_logo_path { 
  fill: none;
  stroke: rgba(255,255,255,1);
  stroke-width: .5;
  stroke-dasharray: 300;
	stroke-dashoffset: 300;
  animation-name: draw_hermitage;
  animation-duration: 9s;
  animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease;
  animation-iteration-count: 1;
}
.preloader .he_1 { animation-delay: 100ms; }
.preloader .he_2 { animation-delay: 200ms; }
.preloader .he_3 { animation-delay: 300ms; }
.preloader .he_4 { animation-delay: 400ms; }
.preloader .he_5 { animation-delay: 500ms; }
.preloader .he_6 { animation-delay: 600ms; }
.preloader .he_7 { animation-delay: 700ms; }
.preloader .he_8 { animation-delay: 800ms; }
.preloader .he_9 { animation-delay: 900ms; }
.preloader .he_10 { animation-delay: 1s; }
.preloader .he_11 { animation-delay: 1.1s; }
.preloader .he_12 { animation-delay: 1.2s; }
.preloader .he_13 { animation-delay: 700ms; animation-duration: 4s; }
@keyframes draw_hermitage {
	from { stroke-dashoffset: 300; }
	to { stroke-dashoffset: 0; }
}

.preloader .home_int {
  opacity: 0;
	animation-name: visible_home_interiors;
  animation-duration: 4s;
  animation-iteration-count: 1;
}
.preloader .hi_1 { animation-delay: 3s; transform: translateY(-20px); }
.preloader .hi_2 { animation-delay: 2.8s; transform: translateY(-18px); }
.preloader .hi_3 { animation-delay: 2.6s; transform: translateY(-16px); }
.preloader .hi_4 { animation-delay: 2.4s; transform: translateY(-14px); }
.preloader .hi_5 { animation-delay: 2.2s; transform: translateY(-12px); }
.preloader .hi_6 { animation-delay: 2s; transform: translateY(-10px); }
.preloader .hi_7 { animation-delay: 1.8s; transform: translateY(-5px); }
.preloader .hi_8 { animation-delay: 2s; transform: translateY(-10px); }
.preloader .hi_9 { animation-delay: 2.2s; transform: translateY(-12px); }
.preloader .hi_10 { animation-delay: 2.4s; transform: translateY(-14px); }
.preloader .hi_11 { animation-delay: 2.6s; transform: translateY(-16px); }
.preloader .hi_12 { animation-delay: 2.8s; transform: translateY(-18px); }
.preloader .hi_13 { animation-delay: 3s; transform: translateY(-20px); }
@keyframes visible_home_interiors {
	from { opacity: 0 }
    50% { opacity: 1; transform: translateY(0); }
	to { transform: translateY(0); opacity: 1; }
}

.loading_line {
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
  margin-right: 7%;
  padding-right: 10px;
  border-left: 1px rgba(255,255,255,.5) solid;
  animation-name: loading_line;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-play-state: running;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}
.loading_line span {
  position: absolute;
  left: 10px;
  top: -10px;
  font-family: konkord-retro;
  font-size: 24px;
  line-height: 1em;
}
.loading_line:after {
  position: absolute;
  content: "";
  width: 3px;
  height: 3px;
  background: #fff;
  border-radius: 50%;
  left: -2px;
  box-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff;
}
@keyframes loading_line {
	from { height: 0; opacity: 0 }
    10% { opacity: 1; }
    90% { opacity: 1; }
	to { height: calc(100% - 15px); opacity: 1; }
}
</style>
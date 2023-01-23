<template>
  <div class="navbar">
    <nav class="container" role="navigation">
      <div class="navbar_content">
        <div class="header_nav">

          <locale-changer></locale-changer>
          <social-icons></social-icons>

          <div class="button_burger" @click="toggleCurtain">
            <span class="burger-line" :class="{ active: toggleMenu }"></span>
          </div>
          
        </div>
        <div class="navbar_wrapper" :class="{ active: toggleMenu }">
          <div class="navbar-list">
            <div 
              class="navbar-item"
              @click='toggleCurtain'
              v-for="(link, index) in links"
              :key="index"
              v-show="link.name != 'PageNotFound'">
                <router-link :to="link.to" class="navbar-link">{{ link.name }}</router-link>
            </div>
          </div>
        </div>
        <svg id="curtain" version="1.1" :view-box.camel="'0 0 '+vbw+' '+vbh" xmlns="http://www.w3.org/2000/svg">
          <path class="curtain1" :d="d1"/>
          <path class="curtain2 hidden" :d="d2"/>
          <path class="curtain3 hidden" :d="d3"/>
          <path class="curtain4 hidden" :d="d4"/>
          <path class="curtain5 hidden" :d="d5"/>
        </svg>
      </div>
    </nav>
  </div>
</template>
<script>
import LocaleChanger from '@/components/LocaleChanger'
import SocialIcons from '@/components/SocialIcons'
export default {
  props: {
    preloaderComplete: Boolean
  },
  components: {
    SocialIcons,
    LocaleChanger
  },
  
  data: () => ({
    langs: ['ru', 'en'],
    links: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Portfolio', to: '/portfolio' },
      { name: 'Partners', to: '/partners' },
      { name: 'Contact', to: '/contact' },
      { name: 'PageNotFound', to: '/page-not-found' }
    ],
    vbw: 0, vbh: 0, d1: '', d2: '', d3: '', d4: '', d5: '',
    toggleMenu: false,
    morph: Function
  }),
  created() {
    window.addEventListener('DOMContentLoaded', this.viewbox);
    window.addEventListener('resize', this.viewbox);
  },
  mounted() {
    var select = function(s) { return document.querySelector(s); },
    curtain = select('#curtain'),
    d1 = select('.curtain1'),
    d2 = select('.curtain2'),
    d3 = select('.curtain3'),
    d4 = select('.curtain4'),
    d5 = select('.curtain5');
    TweenMax.set(curtain, { visibility: 'visible', display: 'none' })
    this.morph = new TimelineMax({ paused: true, yoyo: true });
    this.morph
      .to(d1, 0.1, { morphSVG: d2 }, '+=0')
      .to(d1, 0.2, { morphSVG: d3 }, '+=0')
      .to(d1, 0.25, { morphSVG: d4 }, '+=0')
      .to(d1, 0.25, { morphSVG: d5 }, '+=0')
      .to(d1, 0, {}, '+=0.4');
  },
  methods: {
    toggleCurtain() {
      var toggle = new TimelineMax();
      if (this.morph.time() > 0) {
        this.morph.reverse();
        toggle.to(curtain, 0, { autoAlpha: 0, zIndex: 0, display: 'none' }, '+=' +this.morph.time());
        this.toggleMenu = false;
      } else {
        this.morph.play(0);
        toggle.to(curtain, 0, { autoAlpha: 1, zIndex: 3, display: 'block' });
        this.toggleMenu = true;
      }
    },
    viewbox() {
      var w = window.innerWidth, h = window.innerHeight;
      this.vbw = w;
      this.vbh = h;
      this.d1 = `M0,0 0,0 0,0 ${w},0 ${w},0 ${w},0 0,0z`,
      this.d2 = `M0,0 ${w},0 ${w},${h*0.25} C${w},${h*0.5} 0,${h*0.5} 0,${h*0.25} S0,0z`;
      this.d3 = `M0,0 ${w},0 ${w},${h*0.75} C${w},${h*0.6} 0,${h*0.6} 0,${h*0.75} S0,0z`;
      this.d4 = `M0,0 ${w},0 ${w},${h} C${w*0.5},${h*0.75} ${w*0.5},${h*0.75} 0,${h} S0,0z`;
      this.d5 = `M0,0 ${w},0 ${w},${h} 0,${h} 0,0z`;

      //   this.d1 = `M0 0,0 0,0 0,${w*0.1} 0,${w*0.2} 0,${w*0.3} 0,${w*0.5} 0,${w*0.7} 0,${w*0.8} 0,${w*0.9} 0,${w} 0,${w} 0,${w} 0,0 0z`,
      //   this.d2 = `M0 0,${w} 0,${w} ${h*0.25},${w*0.75} ${h*0.25},${w*0.5} ${h*0.1},${w*0.25} ${h*0.25},0 ${h*0.25},0 0z`;
      //   this.d3 = `M0 0,${w} 0,${w} ${h*0.5},${w*0.75} ${h*0.35},${w*0.5} ${h*0.5},${w*0.25} ${h*0.35},0 ${h*0.5},0 0z`;
      //   this.d4 = `M0 0,${w} 0,${w} ${h*0.75},${w*0.75} ${h*0.75},${w*0.5} ${h*0.9},${w*0.25} ${h*0.75},0 ${h*0.75},0 0z`;
      //   this.d5 = `M0 0,${w} 0,${w} ${h},0 ${h},0 0z`;
    }
  }
}
</script>

<style lang="scss" scoped>
#curtain {
  position: fixed;
  visibility: hidden;
  cursor: pointer;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 2;
}
</style>
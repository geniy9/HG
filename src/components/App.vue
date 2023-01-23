<template>
  <div class="wrapper" 
    @mouseover.once="playSound" 
    @mouseup.once="playSound" 
    @mouseout.once="playSound" 
    @mousewheel.once="playSound">

    <PreloaderDrawLogo :v-show="isHomePage" @preloder-complete="preloaderComplete" />
    <audio ref="audio" src="/Soular_Order_Lucida.m4a" loop="true" muted="muted"></audio>

    <header>
      <div class="home_categories">
        <MainCategories />
      </div>
      <router-link to="/">
        <div class="header_logo">
          <HgLogo class="hg_logo" v-show="hgLogoActive" alt="HERMITAGE HOME INTERIORS" />
          <HermitageLogo class="hermitage_logo" />
        </div>
      </router-link>
      <Header />
    </header>

    <main>
      <transition name="fade" appear>
        <router-view :preloader-complete="preloaderDone"></router-view>
      </transition>
    </main>

  </div>
</template>

<script>
import MainCategories from '@/pages/MainCategories' 
import PreloaderDrawLogo from '@/components/PreloaderDrawLogo'
import HgLogo from '@/components/logo/HgLogo'
import HermitageLogo from '@/components/logo/HermitageLogo'
import Header from './Header.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    MainCategories,
    HgLogo,
    HermitageLogo,
    Header,
    PreloaderDrawLogo
  },
  data() {
    return {
      isHomePage: false,
      preloaderDone: false,
      hgLogoActive: true,
      localSound: false,
    }
  },
  computed: {
    is404() {
      return this.$route.name === '404';
    }
  },
  created() {
    window.addEventListener('beforeunload', function(){
      return this.$route.path === '/' ? this.isHomePage = true : this.isHomePage = false
    })
  },
  methods: {
    preloaderComplete() {
      this.preloaderDone = true;
    },
    playSound() {
      let audio = this.$refs.audio
      this.localSound = true
      audio.play()
    },
    toggleSound() {
      let audio = this.$refs.audio
      if (this.localSound) {
        this.localSound = false
        audio.pause()
      } else {
        this.localSound = true
        audio.play()
      }
    },
    ...mapActions(['actionSound'])
  },
  computed: {
    ...mapGetters(['getterSound'])
  },
  watch: {
    getterSound() {
      this.toggleSound()
    }
  }
}
</script>
<style lang="scss">
.home_categories {
  position: relative;
  display: flex;
  justify-content: center;
}
</style>
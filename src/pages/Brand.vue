<i18n>
{
  "en": {
    "brand": { 
      "more_about": "More about"
    }
  },
  "ru": {
    "brand": { 
      "more_about": "Подробнее о"
    }
  }
}
</i18n>
<template>
  <div>
    <div class="category_title">
      <router-link :to="{ name: 'Brands' }" class="link_to_back">
        <arrow-left></arrow-left>
      </router-link>
    </div>
    <template v-if="brand">

      <template v-if="brand.content.video && videoActive">
        <video autoplay loop class="brand_video">
          <source :src="brand.content.video[0]" type="video/mp4">
        </video>
      </template>

      <template v-else>
        <div class="slider">
          <v-touch @swipeleft="swipeLeft" @swiperight="swipeRight">
            <distortion-carousel
              :key="brand.id"
              :index="index"
              :image-urls="brand.content.pics"
              :distortion-texture-url="distortionTexture"
              :max-width="1920"
              :ratio="{ width: 1.92, height: 1.08 }"
              :move-threshold="threshold"
              :duration-sec="1"
              :easing="{ easing }"
              :alt="brand.name"
              ></distortion-carousel>
          </v-touch>
          <div class="carousel_dots">
            <template v-for="dot in brand.content.pics.length">
              <span class="carousel_dot" 
                :class="(dot - 1) == index ? 'current_dot' : ''" 
                @click="{ index = (dot - 1)}"
                :key="dot">
              </span>
            </template>
          </div>
        </div>
      </template>

      <div class="video_button_wrap" @click="toggleVideo" v-show="brand.content.video">
        <template v-if="videoActive">
          <div class="video_button_icon"><close-button></close-button></div>
        </template>
        <template v-else>
          <div class="video_button_icon"><play-button></play-button></div>
        </template>
      </div>
      <div class="caption_button_wrap" @click="toggleCaption">
        <template v-if="captionActive">
          <span class="caption_button_name">close</span>
        </template>
        <template v-else>
          <div class="caption_button">
            {{ $t('brand.more_about') }}
            <span class="caption_button_name">{{ brand.name }}</span>
          </div>
        </template>
      </div>

    </template>
    
    <div class="container brand_container" :class="{ brand_caption: captionActive }">
      <template v-if="brand">
        <div class="brand_description">
          <div class="brand_logo">
            <svg-properties viewBox="0 0 300 300" width="300" height="300" :icon-name="brand.name" :key="brand.id">
              <svg-content :svg="brand.url"></svg-content>
            </svg-properties>
          </div>
          <hg-stroke class="brand_about">
            <template v-slot:title>
              <div class="brand_link">
                <a class="ui-text-medium" :href="brand.content.website" target="_blank">
                  {{ brand.content.website | noHttp }}
                </a>
              </div>
            </template>
            <template v-slot:desc>
              <p class="ui-text-regular">{{ brand.content.about }}</p>
            </template>
          </hg-stroke>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Expo, Ease } from 'gsap'
import DistortionCarousel from '@kaave/vue-disortion-carousel'
import SvgProperties from '@/components/SvgProperties.vue'
import SvgContent from '@/components/SvgContent.vue'
import HgStroke from '@/components/icons/HgStroke'
import ArrowLeft from '@/components/icons/ArrowLeft'
import CloseButton from '@/components/icons/CloseButton'
import PlayButton from '@/components/icons/PlayButton'

export default {
  name: 'Article',
  components: {
    SvgProperties,
    SvgContent,
    DistortionCarousel,
    HgStroke,
    ArrowLeft,
    CloseButton,
    PlayButton
  },
  data() {
    return { 
      index: 0,
      playInterval: '',
      threshold: 0,
      hg: false,
      captionActive: false,
      videoActive: true
    }
  },
  filters: {
    noHttp(h) {
      return h = h.replace(/^http(s)?:\/\//, '');
    },
    noDash(d) {
      return d = d.replace(/-/g, ' ');
    }
  },
  computed: {
    brandUrl() {
      return this.$route.params['brand_url'] || null;
    },
    brand() {
      return this.$store.state.brand.activeArticle;
    },
    distortionTexture() {
      return '../assets/img/displacement/13.jpg';
    },
    easing() {
      return Expo.easeOut;
    }
  },
  methods: {
    ...mapActions([
      'loadActiveArticle'
    ]),
    swipeLeft() {
      clearInterval(this.playInterval);
      this.index = (this.index + 1) % this.brand.content.pics.length;
      this.threshold = 0.2;
      setTimeout(this.sliderPlay(), 7000)
    },
    swipeRight() {
      clearInterval(this.playInterval);
      if (this.index == 0) {
        this.index = this.brand.content.pics.length - 1;
      } else {
        this.index = this.index - 1;
      }
      setTimeout(this.sliderPlay(), 7000)
    },
    sliderPlay() {
      this.playInterval = setInterval(() => { this.swipeLeft() }, 7000);
    },
    toggleCaption() {
      this.captionActive ? this.captionActive = false : this.captionActive = true;
    },
    toggleVideo() {
      this.videoActive ? this.videoActive = false : this.videoActive = true;
    }
  },
  mounted() {
    this.loadActiveArticle(this.brandUrl);
    this.sliderPlay();
  },
  watch: {
    brandUrl(value) {
      this.loadActiveArticle(value);
    }
  },
  beforeDestroy() {
    clearInterval(this.playInterval);
  }
}
</script>
<style lang="scss" scoped>
.slider {
  position: fixed;
  width: 100%;
  top: 0;
}
.slider canvas {
  width: 100%;
}
.carousel_dots {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
}
.carousel_dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 10px;
  background: rgba(255,255,255,.75);
  transform: rotate(-135deg);
  transition: .5s;
  cursor: pointer;
}
.current_dot, .carousel_dot:hover {
  background: rgba(255,255,255,1);
  transform: rotate(0);
  height: 20px;
  transition: .5s;
}
.brand_logo {
  margin: 0 20px;
  z-index: 0;
  width: 100%;
}
.brand_logo_svg {
  width: 100%;
}
.link_to_back {
  position: relative;
}

.video_button_wrap {
  position: fixed;
  top: 0;
  z-index: 4;
  left: 50%;
  padding: 20px;
  transform: translateX(-50%);
  cursor: pointer;
}
.video_button_icon { width: 100px; }

.caption_button_wrap {
  position: fixed;
  display: block;
  padding: 20px 3%;
  top: 50%;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  text-align: center;
  background: rgba(0,0,0,0);
  transition: .5s;
}
.caption_button_wrap:hover {
  background: rgba(0,0,0,.5);
  transition: .5s;
}
.caption_button {
  padding: 10px 0;
  display: block;
  font-size: 0.4rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: .5s;
}
.caption_button_name {
  position: relative;
  display: block;
  padding-bottom: 6px;
  font-family: 'Konkord-Retro';
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 3px;
  transition: .5s;
  cursor: pointer;
}
.caption_button_name:hover {
  letter-spacing: 7px;
  transition: .5s;
}
.brand_container {
  position: fixed;
  height: 50vh;
  bottom: 0;
  padding: 0 10%;
  display: flex;
  place-items: center;
  background: rgba(0,0,0,.75);
  box-shadow: 0 0 40px 50px rgba(0,0,0,.75);
  transform: translateY(50vw);
  transition: 1s;
  opacity: 0;
}
.brand_container.brand_caption {
  position: fixed;
  bottom: 0;
  transform: translateY(0);
  transition: 1s;
  opacity: 1;
}
.brand_description {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.brand_link {
  position: relative;
  padding: 10px 0;
  z-index: 1;
}
.brand_link .ui-text-medium {
  color: #fff;
}
.brand_link a { white-space: nowrap; }
.brand_about { padding: 10px; }
.brand_about .ui-text-regular {
  color: #aaa;
  font-size: 0.6rem;
  line-height: 1rem;
}

.brand_video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
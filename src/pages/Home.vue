<i18n>
{
  "en": {
    "banner": {
      "slide_0": { 
        "title": "Welcome to",
        "desc": "Hermitage Home Interiors"
      },
      "slide_1": { 
        "title": "We are",
        "desc": "Home Interiors"
      },
      "slide_2": { 
        "title": "We create",
        "desc": "Unique Projects"
      },
      "slide_3": { 
        "title": "We work with",
        "desc": "Italian Architects"
      },
      "slide_4": { 
        "title": "Develop",
        "desc": "Fantastic Design"
      }
    }
  },
  "ru": {
    "banner": {
      "slide_0": { 
        "title": "Добро пожаловать",
        "desc": "Hermitage Home Interiors"
      },
      "slide_1": { 
        "title": "Мы это",
        "desc": "Интерьеры для дома"
      },
      "slide_2": { 
        "title": "Мы создаем",
        "desc": "Уникальные проекты"
      },
      "slide_3": { 
        "title": "Мы работаем",
        "desc": "С итальянскими архитекторами"
      },
      "slide_4": { 
        "title": "Разрабатываем",
        "desc": "Фантастический дизайн"
      }
    }
  }
  ,
  "it": {
    "banner": {
      "slide_0": { 
        "title": "Ben arrivato",
        "desc": "Hermitage Home Interiors"
      },
      "slide_1": { 
        "title": "Noi lo siamo",
        "desc": "Interni domestici"
      },
      "slide_2": { 
        "title": "Noi creiamo",
        "desc": "Progetti unici"
      },
      "slide_3": { 
        "title": "Stiamo lavorando",
        "desc": "Con architetti italiani"
      },
      "slide_4": { 
        "title": "Sviluppiamo",
        "desc": "Design fantastico"
      }
    }
  }
}
</i18n>
<template>
  <div class="home_page">
    <div class="home_slider">
      <vue-slick v-bind="settingsMainSlide" ref="mainSlide" v-show="preloaderComplete">
        <template v-for="(slide, i) in mainSlide">
          <div class="slide_item" :id="'slide_' + i" :key="i">
            <progressive-background class="slide_image" :key="i" :src="slide.img" :placeholder="slide.img | toSvg" :blur="20">
              <div slot="content">
                <div class="container_slide" :class="'slide_title_' + i">
                  <div class="text_slide">
                    <h1 class="ui-title-3 slide_title">{{ $t('banner.slide_'+[i]+'.title') }}</h1>
                    <h2 class="ui-title-3 slide_desc">{{ $t('banner.slide_'+[i]+'.desc') }}</h2>
                  </div>
                </div>
              </div>
            </progressive-background>
          </div>
        </template>
      </vue-slick>
    </div>

    <HomeSections />
    <Footer />

  </div>
</template>
<script>
import VueSlick from 'vue-slick-carousel'
import HgStroke from '@/components/icons/HgStroke'
import HomeSections from '@/components/HomeSections'
import Footer from '@/components/Footer'
export default {
  props: {
    preloaderComplete: Boolean
  },
  components: { 
    VueSlick, 
    HgStroke,
    HomeSections,
    Footer
  },
  data() {
    return {
      isScrolling: false,
      hgLogoActive: true,
      settingsMainSlide: {
        cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        autoplaySpeed: 10000,
        pauseOnHover: false,
        autoplay: true,
        arrows: false,
        dots: false,
        fade: true,
        speed: 0,
      },
      mainSlide: [
        { img: '../assets/img/home/slide_showroom_1.jpg' },
        { img: '../assets/img/home/slide_showroom_2.jpg' },
        { img: '../assets/img/home/slide_showroom_3.jpg' },
        { img: '../assets/img/home/slide_showroom_4.jpg' },
        { img: '../assets/img/home/slide_showroom_5.jpg' }
      ],
    }
  },
}
</script>
<style scoped>
.ui-title-3 {
  letter-spacing: 10px;
}
.slide_item {
  height: 100vh;
}
.slide_image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slick-slide .slide_image {
  animation-name: backImage;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
@keyframes backImage {
  0% { transform: scale(1); }
  50% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
.slick-slide.slick-current .slide_image {
  animation-name: zoomImage;
  animation-duration: 10s;
  animation-delay: 0s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: alternate;
}
@keyframes zoomImage {
  0% { transform: scale(1.075); }
  100% { transform: scale(1); }
}

.container_slide {
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 20px 10%;
  align-items: center;
  height: 100vh;
  z-index: 1;
}
.text_slide {
  display: block;
  max-width: 100%;
}
.slide_title, .slide_desc {
  display: block;
  width: 100%;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;
}
.slide_title {
  font-size: 0.8rem;
  line-height: 1rem;
}
.slide_desc {
  font-weight: 400;
  font-size: 1.8rem;
  text-shadow: 0 0 0 #fff;
}
.slick-current .slide_title, 
.slick-current .slide_desc {
  max-height: 0;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-direction: alternate;
}
.slick-current .slide_title {
  max-height: 100%;
  animation: 10s titleAnimate;
  animation-delay: 0s;
}
.slick-current .slide_desc {
  max-height: 0;
  animation: 10s descAnimate, 10s titleAnimate;
  animation-delay: 0s;
  text-shadow: 0 0 5px #000, 0 0 10px #000;
}
@keyframes titleAnimate {
  0% { max-height: 0; }
  5% { max-height: 0; }
  15% { max-height: 100%; }
  85% { max-height: 100%; }
  95% { max-height: 0; }
  100% { max-height: 0; }
}
@keyframes descAnimate {
  from { transform: translateX(0); }
  50% { transform: translateX(30px); }
  to { transform: translateX(0); }
}

/* activity */
.home_activity {
  position: relative;
  display: block;
}
.activity_section {
  width: 100%;
  padding: 2% 10%;
  margin: 40px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.activity_desc { 
  width: 40%; 
  margin-left: 5%;
}
.activity_section:nth-child(even) .activity_image { order: 2; }
.activity_section:nth-child(even) .activity_desc { order: 1; margin-right: 5%; }

.hg_desc .ui-text-regular {
  transform: translateX(50px);
  opacity: 0;
  transition: 3s ease;
}
.elem_toggle .hg_desc .ui-text-regular {
  transform: translateX(0);
  opacity: 1;
  transition: 3s ease;
}
.activity_image {
  position: relative;
  display: inline-block;
  width: 40%;
  margin: 0;
  transition: .5s;
}
.activity_pic {
  height: 80vh;
  z-index: 0;
}

.activity_image.elem_toggle {
  animation-name: imageMoving;
  animation-iteration-count: 1;
  animation-delay: .1s;
  animation-duration: 5s;
  animation-timing-function: ease;
}
.elem_toggle .activity_pic {
  animation-name: imageWidthGrow;
  animation-iteration-count: 1;
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(0.18, 0.89, 0.29, 1);
}
@keyframes imageMoving {
  0% { transform: translateY(50px); }
  100% { transform: translateY(0); }
}
@keyframes imageWidthGrow {
  0% { 
    height: 80vh; 
    max-width: 0;
    opacity: 0;
  }
  100% {
    height: 80vh;
    max-width: 100%;
    opacity: 1;
  }
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
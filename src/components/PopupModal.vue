<template>
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_close" @click="$emit('close-modal')">&#10006;</div>
      <div class="modal_container" :style="'width:' + widthModal + ';height:' + heightModal">

        <div class="slick_desc" v-if="data.content.description[$i18n.locale]">
          <div class="ui-text-smaller description">{{ data.content.description[$i18n.locale] }}</div>
        </div>
        <div class="slick_arrow prev" @click="prevSlide">
          <ArrowLeft />
        </div>
        <vue-slick v-bind="settingsSlide" ref="carousel">
          <div class="slide_item" v-for="(slide, i) in data.content.pics" :key="i">
            <img :src="slide" :alt="data.name[$i18n.locale]" />
          </div>
        </vue-slick>
        <div class="slick_arrow next" @click="nextSlide">
          <ArrowLeft />
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import VueSlick from 'vue-slick-carousel'
import ArrowLeft from '@/components/icons/ArrowLeft'
export default {
  name: 'PopupModal',
  components: { 
    VueSlick,
    ArrowLeft 
  },
  props: {
    widthModal: { 
      type: String,
      default: '100vw',
    },
    heightModal: { 
      type: String,
      default: '100vh',
    },
    data: { 
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      settingsSlide: {
        cssEase: 'ease',
        autoplaySpeed: 10000,
        pauseOnHover: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 0,
      }
    }
  },
  methods: {
    prevSlide() {
      this.$refs.carousel.prev()
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
  }
}
</script>
<style scoped>
.slick-slider {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slick-list .slick-track {
  display: flex!important;
  justify-content: center;
  align-items: center;
}
.slide_item {
  display: flex!important;
  justify-content: center;
  align-items: center;
}
.slide_item img {
  max-height: 100vh;
}
.slick_desc {
  position: absolute;
  display: flex;
  padding: 5vh 12% 0 12%;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
}
.slick_desc .description {
  background: rgba(0,0,0,.5);
  padding: 20px 20px 5vh 20px;
  color: #fff;
  z-index: 1;
}
.slick_arrow {
  width: 80px;
  padding: 15px;
  position: absolute;
  margin-left: -50px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: .3s;
  z-index: 1;
}
.slick_arrow:hover {
  transition: .3s;
  background: rgba(255,255,255,.03);
}
.slick_arrow.prev {
  margin-left: 0px;
  left: 7%;
}
.slick_arrow.next {
  margin-right: 0px;
  right: 7%;
}
.slick_arrow.next svg {
  transform: rotate(180deg);
}

</style>

<i18n>
{
  "en": {
    "portfolio": { 
      "title_1": "Portfolio",
      "desc_1": "The Hermitage portfolio is extremely unique solutions and exclusive projects! This is an exciting story of our success and your uniqueness reflected in the design of your home!",
      "title_2": "Facts and figures",
      "desc_2": "Striving to make your life even better, decorating it with the unsurpassed decorations of your home - we have created more than a hundred unique author's projects. Each completed interior is our own success story, when we made people happy by creating a home for them from a dream.",
      "desc_3": "Working on the market since 2013, we have managed to gain a leading position and prove that it is possible to create within the framework of gray walls, as if creating unique interiors on blank canvases! Bringing harmony and beauty to people's lives by creating comfortable and cozy housing for them is not difficult for our ambitious team, because this is our main task and our vocation."
    }
  },
  "ru": {
    "portfolio": { 
      "title_1": "Портфолио",
      "desc_1": "Портфолио «Hermitage» - это исключительно уникальные решения и эксклюзивные проекты! Это захватывающая история нашего успеха и вашей уникальности, находящей свое отображение в дизайне дома!",
      "title_2": "Факты и цифры",
      "desc_2": "Стремясь сделать вашу жизнь еще лучше, украсив ее непревзойденными декорациями вашего дома - мы создали более ста уникальных авторских проектов. Каждый реализованный интерьер - это наша собственная история успеха, когда мы сделали людей счастливыми, создав для них дом родом из мечты.",
      "desc_3": "Работая на рынке с 2013 года - мы сумели завоевать лидирующие позиции и доказать, что творить в рамках серых стен, словно на чистых полотнах создавая уникальные интерьеры - возможно! Привносить в жизни людей гармонию и красоту создавая для них комфортное и уютное жилье - для нашей амбициозной команды несложно, ведь это наша главная задача и наше призвание."
    }
  }
}
</i18n>
<template>
  <div class="portfolio_page">
    <div class="portfolio_banner">
      <progressive-background class="portfolio_main_image" 
        :src="portfolioMainPic" 
        :placeholder="portfolioMainPic | toSvg" 
        :blur="0">
      </progressive-background>
      <div class="preload_portfolio_wrap">
        <preloader-draw-portfolio></preloader-draw-portfolio>
      </div>
    </div>

    <div class="portfolio_section portfolio_text">
      <div class="portfolio_text_box">
        <h1 class="ui-title-1 portfolio_title portfolio_main_title">
          {{ $t('portfolio.title_1') }}
        </h1>
        <p class="ui-text-medium">{{ $t('portfolio.desc_1') }}</p>
      </div>
    </div>

    <div class="portfolio_section portfolio_gallery">
      <div class="port_box port_box_1">
        <progressive-background class="port_pic port_pic_1" 
          src="../assets/img/portfolio/portfolio_gallery_1.jpg" 
          placeholder="../assets/img/portfolio/portfolio_gallery_1.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/portfolio/portfolio_gallery_1.svg" class="port_svg port_svg_1">
          </div>
        </progressive-background>
      </div>
      <div class="port_box port_box_2">
        <progressive-background class="port_pic port_pic_2" 
          src="../assets/img/portfolio/portfolio_gallery_2.jpg" 
          placeholder="../assets/img/portfolio/portfolio_gallery_2.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/portfolio/portfolio_gallery_2.svg" class="port_svg port_svg_2">
          </div>
        </progressive-background>
      </div>
      <div class="port_box port_box_3">
        <progressive-background class="port_pic port_pic_3" 
          src="../assets/img/portfolio/portfolio_gallery_3.jpg" 
          placeholder="../assets/img/portfolio/portfolio_gallery_3.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/portfolio/portfolio_gallery_3.svg" class="port_svg port_svg_3">
          </div>
        </progressive-background>
      </div>
      <div class="port_box port_box_4">
        <progressive-background class="port_pic port_pic_4" 
          src="../assets/img/portfolio/portfolio_gallery_4.jpg" 
          placeholder="../assets/img/portfolio/portfolio_gallery_4.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/portfolio/portfolio_gallery_4.svg" class="port_svg port_svg_4">
          </div>
        </progressive-background>
      </div>
      <div class="port_box port_box_5">
        <div class="port_text">
          <h1 class="ui-title-2 port_title">{{ $t('portfolio.title_2') }}</h1>
        </div>
      </div>
      <div class="port_box port_box_6">
        <div class="port_text">
          <p class="ui-text-regular port_desc">{{ $t('portfolio.desc_2') }}</p>
        </div>
      </div>
    </div>

    <div class="portfolio_section portfolio_text">
      <p class="ui-text-regular">{{ $t('portfolio.desc_3') }}</p>
    </div>

  </div>
</template>

<script>
import VueSlick from 'vue-slick-carousel'
import PreloaderDrawPortfolio from '@/components/PreloaderDrawPortfolio'

export default {
  components: {
    VueSlick,
    PreloaderDrawPortfolio
  },
  props: {
    isStartedPage: Boolean
  },
  data() {
    return {
      portfolioMainPic: '../assets/img/portfolio/portfolio_slide_1.jpg'
    }
  }
}
</script>
<style scoped>
.portfolio_page {
  background: #000;
  padding-bottom: 100px;
}

.preload_portfolio_wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}
.portfolio_main_image {
  opacity: 0;
  animation-name: opacity_portfolio;
  animation-duration: 2s;
  animation-delay: 7s;
  animation-fill-mode: forwards;
  z-index: 1;
}
.portfolio_text {
  position: relative;
  text-align: center;
}
.portfolio_text_box {
  margin: -75px auto 0;
}
.portfolio_title {
  position: relative;
  font-size: 4rem;
  letter-spacing: 20px;
  animation-name: title_portfolio;
  animation-duration: 9s;
  animation-fill-mode: forwards;
  z-index: 1;
}
.portfolio_text .ui-text-medium, 
.portfolio_text .ui-text-regular {
  padding: 0 20%;
}
.port_svg {
  position: absolute;
  opacity: 0;
  transition: .5s;
}
.port_pic_1:hover .port_svg_1, 
.port_pic_2:hover .port_svg_2,
.port_pic_3:hover .port_svg_3,
.port_pic_4:hover .port_svg_4 { 
  opacity: 1;
  transition: .5s;
}

.portfolio_gallery {
  position: relative;
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: auto;
  align-items: center;
  grid-gap: 20px;
}
.port_box_1 { grid-column: 1/5; grid-row: 1/4; }
.port_box_2 { grid-column: 5/8; grid-row: 2/4; }
.port_box_3 { grid-column: 2/5; grid-row: 4/6; }
.port_box_4 { grid-column: 5/9; grid-row: 4/7; }
.port_box_5 { grid-column: 1/2; grid-row: 5/9; }
.port_box_6 { grid-column: 2/5; grid-row: 7/8; }

.port_title {
  transform: rotate(-90deg) translateX(-250px);
  width: 75px;
  height: 50px;
  word-break: unset;
  white-space: nowrap;
}
.port_desc {
  transform: translateX(-20px);
}

@keyframes opacity_portfolio {
	from { opacity: 0; }
	to { opacity: 1; }
}
@keyframes title_portfolio {
	from { 
    opacity: 0; 
    letter-spacing: 80px;
    transform: translateY(-66vh);
  }
  75% {
    opacity: 1;
    letter-spacing: 20px;
    transform: translateY(-66vh);
  }
	to {
    opacity: 1;
    letter-spacing: 20px;
    transform: translateY(0);
  }
}
</style>

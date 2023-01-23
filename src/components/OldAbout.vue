<i18n>
{
  "en": {
    "about": {
      "title": "About Hermitage",
      "desc": "Hermitage is a company that always has something to offer its customers, how to surprise them and what is unique to create, to strike into the very heart at first sight. Our task is to constantly search for the best compromise between aesthetics and practicality. We give birth to comfortable and convenient beauty!"
    },
    "philosophy": {
      "title": "Hermitage philosophy",
      "desc_1": "Our philosophy is one sentence: Hermitage home interiors are where your day starts! What do you see first when you wake up? The walls of your home, its decoration and the display of your individuality in it. Therefore, it is important for us to feel the client. Understand his aspirations and find what will inspire him. Find out what is important to him and how he sees his “home of dreams”.",
      "desc_2": "It is important for us not only to meet your expectations - we strive to exceed them! We want to fill the streets of the city with beautiful and cozy houses, where happiness will settle near you with pleasure!"
    },
    "team": {
      "title": "Our team",
      "desc_1": "The success and recognition of the Hermitage company is inextricably linked with its professional team, which always strides forward with a confident step, conquering new heights and creating fashion trends in the world of interior design. High quality of work, the best offers that you deserve and strict adherence to all deadlines ... Our success is not luck, but the painstaking daily work of each member of our large team.",
      "desc_2": "How did we manage to create such a talented creative tandem? We just gathered the best specialists in the field of construction and design under the name of the company. And together they began to create real works of art - author's interiors - worthy of your applause and the covers of the world's glossy magazines."
    }
  },
  "ru": {
    "about": {
      "title": "О компании Hermitage",
      "desc": "Hermitage - компания, которой всегда есть что предложить клиентам, чем их удивить и что такое уникально создать, чтоб поразить в самое сердце с первого взгляда. Наша задача - постоянный поиск самого удачного компромисса между эстетикой и практичностью. Мы рождаем комфортную и удобную красоту!"
    },
    "philosophy": {
      "title": "Философия Hermitage",
      "desc_1": "Наша философия заключается в одном предложении: Домашние интерьеры от Hermitage - то, с чего начинается ваш день! Что вы видите первым, когда просыпаетесь? Стены своего дома, его убранство и отображение в нем своей индивидуальности. Поэтому нам важно прочувствовать клиента. Понять его стремления и найти то, что будет его вдохновлять. Узнать, что ему важно и каким он видит свой «дом мечты».",
      "desc_2": "Нам важно не просто оправдать ваши ожидания - мы стремимся их превзойти! Мы хотим наполнить улицы города красивыми и уютными домами, где рядом с вами с удовольствием поселится счастье!"
    },
    "team": {
      "title": "Наша команда",
      "desc_1": "Успех и признание компании «Hermitage» неразрывно связан с его профессиональной командой, которая всегда уверенным шагом идет вперед, покоряя новые вершины и создавая модные тренды в мире дизайна интерьеров. Высокое качество работ, лучшие предложения, которых вы достойны и четкое соблюдение всех сроков… Наш успех - это не везение, а кропотливая ежедневная работа каждого члена нашей большой команды.",
      "desc_2": "Как нам удалось создать настолько талантливый творческий тандем? Мы просто собрали под названием фирмы лучших специалистов в области строительства и в области дизайна. И совместно они начали творить настоящие произведения искусства - авторские интерьеры - достойные ваших аплодисментов и обложек мировых глянцевых журналов."
    }
  }
}
</i18n>
<template>
  <div class="about_page">

    <div class="about_section">
      <div class="about_box about_text">
        <h1 class="ui-title-1 about_title">{{ $t("about.title") }}</h1>
        <p class="ui-text-medium about_desc">{{ $t("about.desc") }}</p>
      </div>
      <div class="about_box about_image">
        <hg-logo class="hg_bg"></hg-logo>
      </div>
    </div>

    <div class="about_section philosophy_section">
      <div class="phil_box phil_image">
        <progressive-background class="phil_pic phil_pic_1" 
          src="../assets/img/about/about_philosophy_1.jpg" 
          placeholder="../assets/img/about/about_philosophy_1.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/about/about_philosophy_1.svg" class="phil_svg phil_svg_1">
          </div>
        </progressive-background>
      </div>
      <div class="phil_box phil_text">
        <h1 class="ui-title-2 phil_title">{{ $t("philosophy.title") }}</h1>
        <p class="ui-text-regular phil_desc">{{ $t("philosophy.desc_1") }}</p>
        <div class="phil_image">
          <progressive-background class="phil_pic phil_pic_2" 
            src="../assets/img/about/about_philosophy_2.jpg" 
            placeholder="../assets/img/about/about_philosophy_2.svg"
            :blur="0">
            <div slot="content">
              <img src="/assets/img/about/about_philosophy_2.svg" class="phil_svg phil_svg_2">
            </div>
          </progressive-background>
        </div>
      </div>
    </div>
    <div class="philosophy_section">
      <p class="ui-text-regular phil_desc">{{ $t("philosophy.desc_2") }}</p>
    </div>

    <div class="about_section team_section">
      <div class="team_box team_box_1">
        <div class="team_text">
          <h1 class="ui-title-2 team_title">{{ $t("team.title") }}</h1>
          <p class="ui-text-regular team_desc">{{ $t("team.desc_1") }}</p>
        </div>
      </div>
      <div class="team_box team_box_2">
        <progressive-background class="team_pic team_pic_1" 
          src="../assets/img/about/about_team_1.jpg" 
          placeholder="../assets/img/about/about_team_1.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/about/about_team_1.svg" class="team_svg team_svg_1">
          </div>
        </progressive-background>
      </div>
      <div class="team_box team_box_3">
        <progressive-background class="team_pic team_pic_2" 
          src="../assets/img/about/about_team_2.jpg" 
          placeholder="../assets/img/about/about_team_2.svg"
          :blur="0">
          <div slot="content">
            <img src="/assets/img/about/about_team_2.svg" class="team_svg team_svg_2">
          </div>
        </progressive-background>
      </div>
      <div class="team_box team_box_4">
        <progressive-background class="team_pic team_pic_3" 
          src="../assets/img/about/about_team_3.jpg" 
          placeholder="../assets/img/about/about_team_3.svg"
          :blur="0">
          <!-- <div slot="content">
            <img src="/assets/img/about/about_team_3.svg" class="team_svg team_svg_3">
          </div> -->
        </progressive-background>
      </div>
    </div>
    <div class="team_extra_section">
      <p class="ui-text-regular phil_desc">{{ $t("team.desc_2") }}</p>
    </div>

  </div>
</template>
 
<script>
import HgLogo from '@/components/logo/HgLogo'
export default {
  components: {
    HgLogo
  }
}
</script>
<style lang="scss">
/* hg_animate */
.hg_bg {
  max-width: 100%;
}
.hg_bg .hg { 
	fill: none;
  stroke: rgba(255,255,255,.07);
  stroke-width: 2;
	animation-fill-mode: forwards;
  animation-play-state: running;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.hg_bg .hg_h {
	stroke-dasharray: 300;
	stroke-dashoffset: 300;
	animation-name: hg_h;
	animation-duration: 10s;
}
.hg_bg .hg_h1 { animation-delay: 0s; }
.hg_bg .hg_h2 { animation-delay: .5s; }
.hg_bg .hg_h3 { animation-delay: 1s; }
@keyframes hg_h {
	from { stroke-dashoffset: 300; }
	to { stroke-dashoffset: 0; }
}

.hg_bg .hg_g {
	stroke-dasharray: 500;
	stroke-dashoffset: 500;
	animation-name: hg_g;
	animation-delay: 1s;
	animation-duration: 9s;
}
@keyframes hg_g {
	from { stroke-dashoffset: 500; }
	to { stroke-dashoffset: 0; }
}

.hg_bg .hg_circle {
	stroke-dasharray: 1200;
	stroke-dashoffset: 1200;
	animation-name: hg_circle;
	animation-delay: 2s;
  animation-duration: 8s;
}
@keyframes hg_circle {
	from { stroke-dashoffset: 1200; }
	to { stroke-dashoffset: 0; }
}

.about_page { padding: 0; }
.about_section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phil_box {
  width: 40%;
}
.about_text {
  width: 40%;
  padding: 10% 40px;
  transform: translateX(20%);
  text-align: left;
  z-index: 1;
}
.about_image {
  width: 60%;
  transform: translateX(-10%);
}
.about_title {
  letter-spacing: 20px!important;
  text-shadow: 0 0 30px #fff;
}

/* philosophy */
.philosophy_section {
  display: flex;
  justify-content: center;
  padding: 20px 5%;
}
.about_box {
  width: 50%;
}
.phil_box {
  margin-right: 20px;
}
.phil_image {
  position: relative;
  display: block;
}
.phil_pic, .team_pic {
  max-height: 100vh;
  transform: scale(0.95);
  transition: 1s;
}
.phil_pic:hover, .team_pic:hover { 
  transform: scale(1);
  transition: 3s;
}
.phil_svg, .team_svg {
  position: absolute;
  opacity: 0;
  transition: .5s;
}
.phil_title {
  position: relative;
  font-size: 2.6rem;
  letter-spacing: 10px;
  z-index: 2;
}
.phil_desc {
  margin-bottom: 40px;
}

/* team */
.team_section {
  position: relative;
  padding: 20px 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(150px, auto);
  align-items: flex-start;
  grid-gap: 20px;
}
.team_extra_section {
  padding: 20px 20%;
}
.team_box_2 {
  align-self: flex-end;
}
.team_pic_3 {
  max-width: 66%;
  transition: .5s;
}
.team_text {
  text-align: right;
  padding: 40px 0;
}
.team_title {
  position: relative;
  font-size: 2.6rem;
  letter-spacing: 10px;
  z-index: 2;
}
</style>
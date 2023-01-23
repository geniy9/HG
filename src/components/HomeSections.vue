<i18n>
{
  "en": {
    "actions": {
      "title1": "Retails",
      "title2": "The most profitable supplier - Everything in one place!",
      "title3": "Design Studio",
      "title4": "Full range of services",
      "desc1": "From interior design to the supply of all materials and the implementation of turnkey projects. Cooperating with Italian architects and designers, we create comfort, style, quality and comfort in your home. Our company has a design studio developed using advanced technologies, in which new interior and exterior ideas are born and large-scale projects are developed",
      "desc2": "Our official partners in the development of the design project are the Italian architectural company Fontana Grande, which, together with a team of the best designers and architects, embodies unique interior solutions, providing the client with the highest quality work down to the smallest detail"
    }
  },
  "ru": {
    "actions": {
      "title1": "Розничная продажа",
      "title2": "Самый выгодный поставщик - Всё и в одном месте!",
      "title3": "Дизайн Студия",
      "title4": "Полный спектр услуг",
      "desc1": "От разработки интерьера до поставки всех материалов и реализации проектов под ключ. Сотрудничая с итальянскими архитекторами и дизайнерами, мы создаем в вашем доме уют, стиль, качество и комфорт. В нашей компании имеется разработанная по передовым технологиям дизайн-студия, в которой рождаются новые идеи интерьера – экстерьера и разрабатываются масштабные проекты",
      "desc2": "Нашими официальными партнерами в разработке дизайн-проекта являются – итальянская архитектурная компания Fontana Grande, которая воплощает вместе с командой лучших дизайнеров и архитекторов уникальные интерьерные решения, предоставляя клиенту работу высочайшего качества вплоть до мельчайших деталей"
    }
  },
  "it": {
    "actions": {
      "title1": "Vendite al dettaglio",
      "title2": "Il fornitore più redditizio - Tutto in un unico posto!",
      "title3": "Studio di Progettazione",
      "title4": "Gamma completa di servizi",
      "desc1": "Dall'interior design alla fornitura di tutti i materiali e alla realizzazione di progetti chiavi in ​​mano. Collaborando con architetti e designer italiani, creiamo comfort, stile, qualità e comfort nella tua casa. La nostra azienda dispone di uno studio di progettazione sviluppato utilizzando tecnologie avanzate, in cui nascono nuove idee per interni ed esterni e si sviluppano progetti su larga scala",
      "desc2": "I nostri partner ufficiali nello sviluppo del progetto di design sono lo studio di architettura italiano Fontana Grande, che, insieme a un team dei migliori designer e architetti, incarna soluzioni d'interni uniche, fornendo al cliente un lavoro di altissima qualità fin nei minimi dettagli"
    }
  }
}
</i18n>
<template>
  <div class="home_sections">

    <!-- <div class="actions_section action_section_1" style="background-image:url(/assets/img/home/bg_marble.jpg)">
      <h1 class="actions_title action_title_1 animate">{{ $t("actions.title1") }}</h1>
    </div> -->

    <div class="home_categories">
      <h1 class="actions_title action_title_1 animate">{{ $t("actions.title1") }}</h1>
      <StatCategories />
    </div>

    <div class="actions_section action_section_3 animate" style="background-image:url(/assets/img/home/studio.jpg)">
      <h1 class="actions_title action_title_3 animate">
        <span>{{ $t("actions.title2") }}</span>
        <span>{{ $t("actions.title3") }}</span>
      </h1>
    </div>

    <div class="actions_section action_section_4">
      <div class="action_box_4">
        <h1 class="actions_title action_title_4 animate">{{ $t("actions.title4") }}</h1>
        <p class="actions_desc action_desc_1 animate">{{ $t("actions.desc1") }}</p>
      </div>
    </div>

    <div class="actions_section action_section_5" style="background-image:url(/assets/img/home/sketch.jpg)">
      <div class="action_section_container">
        <svg-properties 
          :width="'500px'"
          viewBox="0 120 300 60" 
          :iconName="'fontanagrande'"
          class="fontanagrande_logo animate">
          <svg-content :svg="'fontanagrande'"></svg-content>
        </svg-properties>
        <p class="actions_desc action_desc_2 animate">{{ $t("actions.desc2") }}</p>
      </div>
    </div>

    <Footer />

  </div>
</template>
<script>
import SvgProperties from '@/components/SvgProperties'
import SvgContent from '@/components/SvgContent'
import StatCategories from '@/pages/StatCategories'
import { scrollAnimate } from '@/mixins'
export default {
  components: {
    SvgProperties,
    SvgContent,
    StatCategories
  },
  mixins: [scrollAnimate]
}
</script>
<style lang="scss">
.home_categories {
  position: relative;
}
.actions_section {
  display: flex;
  padding: 0 5%;
  background-repeat: no-repeat;
  background-color: #fff;
}

.action_section_3 {
  position: relative;
  align-items: flex-end;
  justify-content: flex-start;
  background-position: center bottom;
  background-size: 110%;
  min-height: 100vh;
}
.action_section_3.active {
  background-size: 100%;
  transition: 7s;
}
.action_section_4 {
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  min-height: 200px;
}
.action_section_5 {
  align-items: flex-start;
  justify-content: center;
  background-position: center top;
  // background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
}

.actions_title {
  font-family: 'konkord-retro';
  text-transform: uppercase;
  color: #000;
}

.action_title_1 {
  position: absolute;
  padding: 20px 5%;
  width: 100%;
  text-align: center;
  z-index: 1;
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: 1rem;
  transform: translateX(-30px);
  transition: 2s;
}
.action_title_1.active {
  font-size: 2rem;
  transform: translateX(0);
  transition: 2s;
}
.action_title_3 {
  font-size: 1.2rem;
  letter-spacing: 5px;
  color: #fff;
  padding: 20px 5%;
  line-height: 2rem;
  backdrop-filter: blur(7px);
  transform: translateY(30px);
}
.action_title_3.active {
  transform: translateY(0);
  transition: 5s;
}
.action_title_3 span:nth-child(2) {
  font-family: Arial, Helvetica, sans-serif;
  font-size: .5rem;
  letter-spacing: 1rem;
}
.action_title_3 span {
  display: block;
}

.action_title_4 {
  display: inline-flex;
  font-size: 1.6rem;
  line-height: 1.4rem;
  letter-spacing: 3px;
  transform: translateY(-30px);
}
.action_title_4.active {
  transform: translateY(0);
  transition: 2s;
}

.actions_desc {
  color: #333;
  font-size: 0.8rem;
  font-family: 'panton_regular';
  letter-spacing: 1px;
}

.action_desc_1 {
  display: inline;
  margin-left: 20px;
  color: #555;
  opacity: 0;
}
.action_desc_1.active {
  transition: 2s 1s;
  opacity: 1;
}
.action_desc_2 {
  margin-left: 2rem;
  opacity: 0;
}
.action_desc_2.active {
  transition: 2s 1s;
  opacity: 1;
}

.action_section_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.fontanagrande_logo {
  height: 100px;
  flex: 0 0 auto;
  transform: translateY(50px);
}
.fontanagrande_logo.active {
  transform: translateY(0);
  transition: 2s;
}
.fontanagrande_logo .st0 {
  fill: #000;
}

</style>
<i18n>
{
  "en": {
    "about": {
      "title1": "Premium class company Hermitage Home Interiors",
      "desc1": "Which allows you to feel the symbol of impeccable taste, the synthesis of modern technology with traditional Italian quality, exclusive modern design and sophisticated style, representing a mixture of different cultures and times. Home interiors are where your day starts! It is important for us to feel the client. Understand his aspirations and find what will inspire him. Find out what is important to him and how he sees his “dream house”.",
      "title2": "Projects",
      "desc2": "We are those who value your time and resources, so we work without intermediaries and supply directly from the most advanced and well-known manufacturers. We provide a full range of opportunities, from interior design to the supply of all materials and the implementation of turnkey projects. We work with both private and commercial projects.",
      "title3": "Contracts",
      "desc3": "Cooperating with international and local construction companies, we supply products in our areas, provide warranty service and complete project coordination. Having established itself as a supplier that guarantees the quality of work and strictly observes the deadlines set by the customer, our company is a top partner of international companies in Turkmenistan.",
      "title4": "Logistics",
      "desc4": "We provide a full range of cargo delivery services. Direct cooperation with international translators, as well as the availability of warehouses in Europe, allows us to significantly reduce delivery times and offer favorable rates. Delivery is possible across Turkmenistan and any other countries of the world.",
      "title5": "Our partners"
    },
    "showroom": {
      "title1": "The first showroom presents destinations",
      "title2": "The second showroom presents destinations",
      "title3": "Directions",
      "title4": "Showrooms"
    }
  },
  "ru": {
    "about": {
      "title1": "Компания премиум класса Hermitage Home Interiors",
      "desc1": "Которая позволяет почувствовать символ безупречного вкуса, синтеза современных технологий с традиционным итальянским качеством, эксклюзивный современный дизайн и утонченный стиль, представляющий смесь различных культур и времён. Домашние интерьеры - то, с чего начинается ваш день! Нам важно прочувствовать клиента. Понять его стремления и найти то, что будет его вдохновлять. Узнать, что ему важно и каким он видит свой «дом мечты».",
      "title2": "Проекты",
      "desc2": "Мы те, кто ценит ваше время и ресурсы, поэтому работаем без посредников и осуществляем поставки от самых передовых и известных производителей напрямую. Предоставляем полный комплекс возможностей, от разработки интерьера до поставки всех материалов и реализации проектов под ключ. Работаем как с частными, так и с коммерческими проектами.",
      "title3": "Контракты",
      "desc3": "Сотрудничая с международными и местными строительными компаниями, мы осуществляем поставку продукции по нашим направлениям, гарантийное обслуживание и полную координацию проекта. Зарекомендовав себя поставщиком, гарантирующего качество работы и строго соблюдающего установленные заказчиком сроки, наша компания является топ-партнером международных компаний в Туркменистане.",
      "title4": "Логистика",
      "desc4": "Мы осуществляем полный спектр услуг по доставке груза. Прямое сотрудничество с международными переводчиками, а также наличие складов в Европе позволяет нам значительно сократить сроки доставки и предложить выгодные тарифы. Доставка возможна по Туркменистану и любым другим странам мира.",
      "title5": "Наши партнеры"
    },
    "showroom": {
      "title1": "Первый шоу-рум представляет направления",
      "title2": "Второй шоу-рум представляет направления",
      "title3": "Направлений",
      "title4": "Шоу-рума"
    }
  },
  "it": {
    "about": {
      "title1": "Azienda di classe premium Hermitage Home Interiors",
      "desc1": "Che ti fa sentire il simbolo del gusto impeccabile, la sintesi della tecnologia moderna con la tradizionale qualità italiana, il design moderno esclusivo e lo stile sofisticato, che rappresentano una miscela di culture e tempi diversi. Gli interni di casa sono dove inizia la tua giornata! Per noi è importante sentire il cliente. Comprendi le sue aspirazioni e trova ciò che lo ispirerà. Scopri cosa è importante per lui e come vede la sua “casa dei sogni”.",
      "title2": "Progetti",
      "desc2": "Siamo quelli che apprezzano il tuo tempo e le tue risorse, quindi lavoriamo senza intermediari e forniamo direttamente dai produttori più avanzati e conosciuti. Forniamo una gamma completa di opportunità, dall'interior design alla fornitura di tutti i materiali e alla realizzazione di progetti chiavi in mano. Lavoriamo sia con progetti privati che commerciali.",
      "title3": "Contratti",
      "desc3": "Collaborando con imprese edili internazionali e locali, forniamo prodotti nelle nostre aree, forniamo un servizio di garanzia e un coordinamento completo dei progetti. Essendosi affermata come un fornitore che garantisce la qualità del lavoro e rispetta rigorosamente le scadenze fissate dal cliente, la nostra azienda è un top partner di aziende internazionali in Turkmenistan.",
      "title4": "la logistica",
      "desc4": "Forniamo una gamma completa di servizi di consegna merci. La collaborazione diretta con traduttori internazionali, così come la disponibilità di magazzini in Europa, ci consente di ridurre notevolmente i tempi di consegna e di offrire tariffe vantaggiose. La consegna è possibile in Turkmenistan e in qualsiasi altro paese del mondo.",
      "title5": "I nostri partner"
    },
    "showroom": {
      "title1": "Il primo showroom presenta le destinazioni",
      "title2": "Il secondo showroom presenta le destinazioni",
      "title3": "Indicazioni",
      "title4": "Showroom"
    }
  }
}
</i18n>
<template>
  <div class="about_page">

    <div class="about_section" style="background-image:url(../assets/img/about/1.jpg)">
      <div class="about_content">
        <h1 class="ui-title-3">{{ $t("about.title1") }}</h1>
        <p class="ui-text-small">{{ $t("about.desc1") }}</p>
      </div>
    </div>
    <div class="about_section">
      <div class="about_content">
        <div class="about_activity">
          <div class="activity_item">
            <img src="/assets/img/about/activities.jpg" alt="showroom" />
            <div class="activity_ways">
              <div class="ways_qty">12</div>
              <div class="ways font">{{ $t("showroom.title3") }}</div>
            </div>
          </div>
          <div class="activity_item">
            <h2 class="ui-text-small">{{ $t("showroom.title1") }}</h2>
            <ArticleItems v-slot="props" :items="firstShowroom">
              <div class="category_item">
                <router-link :to="props.item.url">{{ props.item.title[$i18n.locale] }}</router-link>
              </div>
            </ArticleItems>
          </div>
          <div class="activity_item">
            <h2 class="ui-text-small">{{ $t("showroom.title2") }}</h2>
            <ArticleItems v-slot="props" :items="secondShowroom">
              <div class="category_item">
                <router-link :to="props.item.url">{{ props.item.title[$i18n.locale] }}</router-link>
              </div>
            </ArticleItems>
          </div>
          <div class="activity_item">
            <div class="showroom_qty">2</div>
            <div class="showroom font">{{ $t("showroom.title4") }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="about_section" style="background-image:url(../assets/img/about/2.jpg)">
      <div class="about_content">
        <h1 class="ui-title-3">{{ $t("about.title2") }}</h1>
        <p class="ui-text-medium">{{ $t("about.desc2") }}</p>
      </div>
    </div>
    <div class="about_section" style="background-image:url(../assets/img/about/3.jpg)">
      <div class="about_content">
        <h1 class="ui-title-3">{{ $t("about.title3") }}</h1>
        <p class="ui-text-medium">{{ $t("about.desc3") }}</p>
      </div>
    </div>
    <div class="about_section" style="background-image:url(../assets/img/about/4.jpg)">
      <div class="about_content">
        <h1 class="ui-title-3">{{ $t("about.title4") }}</h1>
        <p class="ui-text-medium">{{ $t("about.desc4") }}</p>
      </div>
    </div>
    <div class="about_section">
      <div class="about_content">
        <h1 class="ui-title-3">{{ $t("about.title5") }}</h1>
        <Partners />
      </div>
    </div>

    <Footer />

  </div>
</template>
 
<script>
import { mapGetters } from 'vuex'
import ArticleItems from '@/components/ArticleItems'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'
export default {
  components: {
    ArticleItems,
    Partners,
    Footer
  },
  computed: {
    ...mapGetters([
      'categories'
    ]),
    firstShowroom() {
      return this.categories.filter(item => item.showroom == 1)
    },
    secondShowroom() {
      return this.categories.filter(item => item.showroom == 2)
    }
  },
  created() {
    this.$store.dispatch('loadCategories');
  }
}
</script>
<style lang="scss">
.about_section {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about_section:nth-child(1) { padding-top: 34.84%; }
.about_section:nth-child(2) { min-height: 30vh; }
.about_section:nth-child(3) { padding-top: 28%; }
.about_section:nth-child(4) { padding-top: 48.28%; }
.about_section:nth-child(5) { padding-top: 55.88%; }

.about_content {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5% 0;
  top: 0;
}
.about_content h1 { font-size: 1.2rem; }
.about_content p {
  font-size: .6rem;
  letter-spacing: 1px;
}
.about_activity {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ACTIVITY */
.activity_item {
  position: relative;
  margin-right: 3%;
}
.activity_item h2 {
  margin-bottom: 20px;
}
.category_item a {
  font-size: .7rem;
  color: #aaa;
}
.activity_ways .ways_qty,
.activity_item .showroom_qty {
  font-size: 7rem;
  line-height: 5rem;
  color: #999;
  font-family: 'garden';
}
.activity_ways .ways,
.activity_item .showroom {
  font-size: .8rem;
  letter-spacing: 2px;
  white-space: nowrap;
  color: #999;
}
.activity_item:nth-child(1) {
  flex: 1 0 auto;
}
.activity_item:nth-child(4) {
  text-align: right;
}
.activity_ways {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.about_section:nth-child(1) .about_content {
  align-items: flex-start;
  justify-content: flex-end;
  padding: 5% 50% 5% 10%;
}
.about_section:nth-child(2) .about_content {
  position: relative;
  background: #1b1b1b;
  flex-direction: row;
}
.about_section:nth-child(3) .about_content {
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5% 50% 5% 20%;
}
.about_section:nth-child(4) .about_content {
  align-items: flex-start;
  justify-content: flex-start;
  padding: 5% 10% 5% 50%;
}
.about_section:nth-child(5) .about_content {
  align-items: flex-start;
  justify-content: center;
  padding: 5% 50% 5% 10%;
}
.about_section:nth-child(6) .about_content {
  position: relative;
  padding: 5% 7%;
}
.about_section:nth-child(1) .about_content p,
.about_section:nth-child(3) .about_content p {
  color: #aaa;
}
.about_section:nth-child(5) .about_content h1,
.about_section:nth-child(5) .about_content p {
  color: #111;
}
</style>
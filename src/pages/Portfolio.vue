<i18n>
{
  "en": {
    "portfolio": { 
      "title1": "Portfolio"
    }
  },
  "ru": {
    "portfolio": { 
      "title1": "Портфолио"
    }
  },
  "it": {
    "portfolio": { 
      "title1": "Portafoglio"
    }
  }
}
</i18n>
<template>
  <div class="portfolio_page">

    <transition name="popup">
      <PopupModal v-if="popup" @close-modal="popup = false" :data="dataProject" />
    </transition>

    <div class="portfolio_content">
      <h1 class="ui-title-3">{{ $t("portfolio.title1") }}</h1>
      <div class="portfolio_items">
        <div class="portfolio_item" v-for='(item, i) in getterProjects' :key="i" @click="openPopup(item)">
          <div v-if="item.content.pics" class="portfolio_img" :style="'background-image:url(' + item.content.pics[0] + ')'"></div>
          <div class="portfolio_title ui-text-smaller">{{ item.name[$i18n.locale] }}</div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>
<script>
import VueSlick from 'vue-slick-carousel'
import PopupModal from '@/components/PopupModal'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'
export default {
  components: {
    VueSlick,
    PopupModal,
    Footer
  },
  data() {
    return {
      dataProject: null,
      popup: false
    }
  },
  created() {
    this.$store.dispatch('loadProjects');
  },
  methods: {
    openPopup(data) {
      this.dataProject = data
      this.popup = true
    },
  },
  computed: {
    ...mapGetters(['getterProjects']),
  },
}
</script>
<style scoped>
.portfolio_content {
  padding: 5% 15%;
}
.portfolio_content h1 {
  margin-bottom: 20px;
}
.portfolio_items {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 1.5rem;
}

.portfolio_item {
  text-align: right;
  cursor: pointer;
}
.portfolio_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 70%;
  width: 100%;
  margin-bottom: 5px;
}
.portfolio_title {
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

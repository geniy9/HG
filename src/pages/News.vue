<i18n>
{
  "en": {
    "news": { 
      "title1": "News"
    }
  },
  "ru": {
    "news": { 
      "title1": "Новости"
    }
  },
  "it": {
    "news": { 
      "title1": "News"
    }
  }
}
</i18n>
<template>
  <div class="news_page">

    <transition name="popup">
      <PopupModal v-if="popup" @close-modal="popup = false" :data="dataNews" />
    </transition>

    <div class="news_content">
      <h1 class="ui-title-3">{{ $t("news.title1") }}</h1>
      <div class="news_items">
        <div class="news_item" v-for='(item, i) in getterNews' :key="i" @click="openPopup(item)">
          <div v-if="item.content.pics" class="news_img" :style="'background-image:url(' + item.content.pics[0] + ')'"></div>
          <div class="news_title ui-text-smaller">{{ item.name[$i18n.locale] }}</div>
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
      dataNews: null,
      popup: false
    }
  },
  created() {
    this.$store.dispatch('loadNews');
  },
  methods: {
    openPopup(data) {
      this.dataNews = data
      this.popup = true
    },
  },
  computed: {
    ...mapGetters(['getterNews']),
  },
}
</script>
<style scoped>
.news_content {
  padding: 5% 15%;
}
.news_content h1 {
  margin-bottom: 20px;
}
.news_items {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 1.5rem;
}

.news_item {
  text-align: right;
  cursor: pointer;
}
.news_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 70%;
  width: 100%;
  margin-bottom: 5px;
}
.news_title {
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>

<template>
  <div>
    <div v-if="!currentRoutShow" @click="popupCategories" class="dots_menu">
      <template v-if="modalCategories">
        <close-button :icon-width="'15px'"></close-button>
      </template>
      <template v-else>
        <dots-menu :icon-width="'15px'"></dots-menu>
      </template>
    </div>
    <modal-window v-if="modalCategories" :width-modal="'100vw'">

      <div slot="header"></div>
      <div slot="body">
        
        <ArticleItems 
          class="category_list"
          v-slot="props"
          :items="categories">
          <div class="category_item transition_bg" @click="popupCategories" @mouseover="mouseOver(props.item.id)">
            <router-link :to="getCategoryRoute(props.item)" class="ui-text-medium category_link">
              {{ props.item.title[$i18n.locale] }}
              <span class="cat_border_box">
                <span class="cat_border cat_border_top"></span>
                <span class="cat_border cat_border_right"></span>
                <span class="cat_border cat_border_bottom"></span>
                <span class="cat_border cat_border_left"></span>
              </span>
            </router-link>
          </div>
        </ArticleItems>
        <template v-for="(bg, index) in listBg">
          <progressive-background 
            class="category_bg" 
            :class="index == bgActive ? 'active' : ''"
            :src="bg" 
            :placeholder="bg | jpg2svg" 
            :blur="3" 
            :key="index">
          </progressive-background>
        </template>

      </div>
      <div slot="footer"></div>
    </modal-window>
  </div>
</template>
<script>
import DotsMenu from '@/components/icons/DotsMenu'
import CloseButton from '@/components/icons/CloseButton'
import ModalWindow from '@/components/ModalWindow'
import ArticleItems from '@/components/ArticleItems.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'MainCategories',
  components: {
    DotsMenu,
    CloseButton,
    ModalWindow,
    ArticleItems,
  },
  filters: {
    jpg2svg(ext) {
      return ext = ext.replace(/(png|jpg)$/, 'svg');
    }
  },
  data() {
    return {
      bgActive: 0,
      modalCategories: false,
      defaultBg: '../assets/img/home/cat_background.jpg',
      listBg: [
        '../assets/img/home/cat_background.jpg',
        '../assets/img/home/cat_bathrooms.jpg',
        '../assets/img/home/cat_spawellness.jpg',
        '../assets/img/home/cat_tiles.jpg',
        '../assets/img/home/cat_furniture.jpg',
        '../assets/img/home/cat_kitchen.jpg',
        '../assets/img/home/cat_lighting.jpg',
        '../assets/img/home/cat_floorcoverings.jpg',
        '../assets/img/home/cat_windowsdoors.jpg',
        '../assets/img/home/cat_decor.jpg',
        '../assets/img/home/cat_heatingcooling.jpg',
        '../assets/img/home/cat_building.jpg',
        '../assets/img/home/cat_fireplaces.jpg'
      ]
    };
  },
  methods: {
    popupCategories() {
      this.modalCategories == false ? this.modalCategories = true : this.modalCategories = false;
    },
    getCategoryRoute(item) {
      return {
        name: 'Brands',
        params: {
          category_url: item.url
        }
      };
    },
    mouseOver(id) {
      this.bgActive = id
    },
    mouseLeave() {
      this.bgActive = 0
    }
  },
  computed: {
    ...mapGetters([
      'articles',
      'categories'
    ]),
    currentRoutShow() {
      return this.$route.matched.some(({ name }) => { return name === 'Brand' || name === 'Home' ? true : false })
    }
  },
  created() {
    this.$store.dispatch('loadArticles');
    this.$store.dispatch('loadCategories');
  }
}
</script>
<style lang="scss" scoped>
.dots_menu {
  position: fixed;
  display: flex;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.dots_menu:after {
  position: absolute;
  content: '';
  border-radius: 50%;
  background: rgba(0,0,0,.1);
  border: 1px rgba(255, 255, 255, 0.1) solid;
  transform: scale(1);
  width: 60px;
  height: 60px;
  transition: .5s;
  z-index: -1;
}
.dots_menu:hover:after {
  transform: scale(1.2);
  transition: .5s;
}
.category_bg {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #000;
  background-size: cover;
  transition: 1s;
  opacity: 0;
  z-index: 0;
}
.category_bg.active {
  opacity: 1;
  transition: 1s;
}

.category_list {
  position: relative;
  background: rgba(0,0,0,.5);
  padding: 10% 5% 10% 5%;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 0;
  z-index: 1;
}
.category_item {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 1s;
}
.category_link {
  position: relative;
  display: inline-block;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #fff;
  transition: .5s;
  &:hover {
    text-shadow: 0 0 5px #000;
    transition-duration: 1.5s;
    transition-timing-function: ease;
    .cat_border { transition-duration: .25s; transition-timing-function: ease; }
    .cat_border_top { width: 100%; transition-delay: 0s; }
    .cat_border_right { height: 100%; transition-delay: .1s; }
    .cat_border_bottom { width: 100%; transition-delay: .2s; }
    .cat_border_left { height: 100%; transition-delay: .3s; }
  }
}
.cat_border { position: absolute; background: rgba(255,255,255,.5); }

.cat_border_top, .cat_border_bottom { height: 1px; width: 0; }
.cat_border_left, .cat_border_right { width: 1px; height: 0; }
.cat_border_top { top: 0; left: 0; }
.cat_border_right { top: 0; right: 0; }
.cat_border_bottom { bottom: 0; right: 0; }
.cat_border_left { bottom: 0; left: 0; }
</style>
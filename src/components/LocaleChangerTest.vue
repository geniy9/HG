<template>
  <div class="locale_changer navbar-item">
    <div class="header_lang cursor_pointer" @click="dropdownLang">
      <planet-icon :icon-width="25" :icon-color="'#fff'"></planet-icon>
    </div>
    <div v-show="dropdown" class="header_lang_content" @click="dropdownLang">
      <div class="lang_item navbar-link" v-for="(entry, i) in languages" :key="i" @click="changeLocale(entry.lang)">
        {{ entry.lang }}
      </div>
    </div>
  </div>
</template>
<script>
import PlanetIcon from '@/components/icons/PlanetIcon'
export default {
  name: 'locale-changer-test',
  components: {
    PlanetIcon
  },
  data() {
    return {
      languages: [
        { flag: 'us', lang: 'en' },
        { flag: 'ru', lang: 'ru' },
        { flag: 'it', lang: 'it' }
      ],
      dropdown: false
    }
  },
  methods: {
    changeLocale(val) {
      this.$root.$i18n.locale = val;
    },
    dropdownLang() {
      this.dropdown == true ? this.dropdown = false : this.dropdown = true;
    },
  }
}
</script>
<style scoped>
.header_lang {
  display: flex;
  align-items: center;
}
.header_lang_content {
  position: absolute;
  top: 40px;
  left: -8px;
  background: #fff;
  box-shadow: 0 0 5px #00000050;
  padding: 5px 0;
  border-radius: 4px;
}
.header_lang_content:after {
  position: absolute;
  content: "";
  border: 10px transparent solid;
  border-bottom: 10px #fff solid;
  top: -20px;
  left: 20px;
}
.locale_changer {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-right: 20px;
  z-index: 4;
}
.lang_item {
  cursor: pointer;
  padding: 10px 20px;
  font-size: .5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
}
</style>
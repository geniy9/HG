<template>
  <div class="locale_changer navbar-item">
    <div class="header_lang_content navbar-list">
      <div class="lang_item navbar-item" v-for="(entry, i) in languages" :key="i" @click="changeLocale(entry.lang)">
        <span class="lang_unit">{{ entry.lang }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'locale-changer',
  data() {
    return {
      languages: [
        { flag: 'us', lang: 'en' },
        { flag: 'ru', lang: 'ru' },
        { flag: 'it', lang: 'it' }
      ],
    }
  },
  methods: {
    changeLocale(val) {
      this.$root.$i18n.locale = val;
    }
  }
}
</script>
<style scoped>
.locale_changer {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 10px;
  flex: 1;
}
.header_lang_content {
  position: relative;
  display: flex;
  padding: 5px 0;
}
.lang_item {
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  padding: 10px;
  margin: 0 5px;
  width: 50px;
  height: 50px;
  font-size: .5rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  border-bottom: 1px #ffffff50 solid;
}
.lang_unit {
  line-height: 1rem;
  font-family: sans-serif
}
</style>
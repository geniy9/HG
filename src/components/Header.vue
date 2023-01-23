<template>
  <div class="navbar">
    <nav class="container" role="navigation">
      <div class="navbar_content">
        <div class="header_nav">

          <SoundToggle />
          <SocialIcons />
          <div class="button_burger" @click="toggleCurtain">
            <span class="burger-line" :class="{ active: toggleMenu }"></span>
          </div>
          
        </div>
        <div class="navbar_wrapper" :class="{ active: toggleMenu }">

          <LocaleChanger /> 
          
          <div class="navbar-list">
            <div class="navbar-item" @click='toggleCurtain' v-for="(link, i) in links" :key="i">
              <router-link :to="link.to" class="navbar-link">{{ link[$i18n.locale] }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import SoundToggle from '@/components/SoundToggle'
import LocaleChanger from '@/components/LocaleChanger'
import SocialIcons from '@/components/SocialIcons'
export default {
  props: {
    preloaderComplete: Boolean
  },
  components: {
    SoundToggle,
    SocialIcons,
    LocaleChanger
  },
  data: () => ({
    links: [
      { en: 'About', ru: 'О компании', it: 'Circa la società', to: '/about' },
      { en: 'Portfolio', ru: 'Портфолио', it: 'Portafoglio', to: '/portfolio' },
      { en: 'News', ru: 'Новости', it: 'Notizia', to: '/news' },
      { en: 'Contact', ru: 'Контакты', it: 'Contatti', to: '/contact' }
    ],
    toggleMenu: false
  }),
  methods: {
    toggleCurtain() {
      this.toggleMenu == false ? this.toggleMenu = true : this.toggleMenu = false;
    }
  }
}
</script>

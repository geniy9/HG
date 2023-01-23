import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueHead from 'vue-head'
import App from './components/App.vue'
import router from './router'
import './assets/style/app.scss'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import VueProgressiveImage from 'vue-progressive-image'
import VueTouch from 'vue-touch'
import VueI18n from 'vue-i18n'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

import store from './store'

Vue.config.productionTip = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker-cache.js').then(() => {
    console.log('Service Worker Registered')
  })
}

Vue.use(Vuelidate)
Vue.use(VueHead)
Vue.use(VueProgressiveImage, {
  //delay: 3000
})
Vue.use(VueTouch)
Vue.use(VueI18n)
Vue.use(Vuetify)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru'
});

Vue.filter('toSvg', function (ext) { 
  return ext = ext.replace(/(png|jpg)$/, 'svg');
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  i18n,
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyB2PEzQZa6a3tz6rcuJJn8MujVaaiqGi50',
      authDomain: 'gafurov-net.firebaseapp.com',
      databaseURL: 'https://gafurov-net.firebaseio.com',
      projectId: 'gafurov-net',
      storageBucket: 'gafurov-net.appspot.com',
      messagingSenderId: '140308543251',
      appId: '1:140308543251:web:f12d97c129ff2b213f4ce6',
      measurementId: 'G-1CWL62YE36'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
});
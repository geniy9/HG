import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import brand from './modules/brand'
import utils from './modules/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    brand,
    utils
  }
})
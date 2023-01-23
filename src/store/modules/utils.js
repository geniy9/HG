export default {
  state: {
    sound: false
  },
  mutations: {
    SOUND(state, payload) {
      state.sound = payload;
    }
  },
  actions: {
    actionSound({state, commit}) {
      state.sound == false ? commit('SOUND', true) : commit('SOUND', false)
    },
  },
  getters: {
    getterSound: (state) => state.sound
  }
}
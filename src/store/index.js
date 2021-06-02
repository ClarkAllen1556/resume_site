import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: {
      cur: "EN",
      langs: ["JP", "EN"]
    }
  },
  mutations: {
    setLocal(state, newLocal) {
      state.locale.cur = newLocal
      localStorage.setItem("locale", newLocal)
      Vue.$log.info(`Changed locale to ${newLocal}`)
    }
  },
  actions: {
    changeLocale({ commit, state }, newLocal) {
      Vue.$log.info(`Changing locale from ${state.locale.cur} -> ${newLocal}`)

      commit('setLocal', newLocal)
    }
  },
  getters: {
    langs(state) {
      return state.locale.langs
    },
    currentLang(state) {
      return state.locale.cur
    }
  },
})

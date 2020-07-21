import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locale: {
      cur: "EN",
      langs: [ "JP", "EN" ]
    }
  },
  mutations: {
    setLocal(state, newLocal) {
      state.locale.cur = newLocal

      Vue.$log.info(`Changed locale to ${newLocal}`)
    }
  },
  actions: {
    changeLocale({ commit, state }, newLocal) {
      return new Promise( (resolve) => {
        Vue.$log.info(`Changing locale from ${state.locale.cur} -> ${newLocal}`)

        commit('setLocal', newLocal)
        resolve()
      })
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
  modules: {
  }
})

export function useStore() {
  return store
}

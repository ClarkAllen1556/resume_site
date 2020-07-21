import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import VueI18n from 'vue-i18n'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { EN_TRANSLATION } from './assets/locales/translations/en'
import { JP_TRANSLATION } from './assets/locales/translations/jp'
import './styles/custom.scss'

Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

const TRANSLATIONS = {
  EN: EN_TRANSLATION,
  JP: JP_TRANSLATION
}

const i18n = new VueI18n({
  locale: 'JP',
  messages: TRANSLATIONS
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

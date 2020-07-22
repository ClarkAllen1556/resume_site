import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueCompositionAPI from '@vue/composition-api'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import VueLogger from 'vuejs-logger'
import VueMarkdown from 'vue-markdown'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

import { EN_TRANSLATION } from './assets/locales/translations/en'
import { JP_TRANSLATION } from './assets/locales/translations/jp'
import './styles/custom.scss'

Vue.component('vue-markdown', VueMarkdown)
Vue.component('v-icon', Icon)

Vue.config.productionTip = false

Vue.use(VueMarkdown)
Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)

const isProduction = process.env.NODE_ENV === 'production';
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options)

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

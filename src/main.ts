import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import messages from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  messages: {
    'en': messages,
  },
})

createApp(App)
  .use(i18n)
  .mount('#app')

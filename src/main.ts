import './assets/main.scss'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

const routes = setupLayouts(generatedRoutes)

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'fr',
  datetimeFormats: {
    fr: {
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
    en: {
      long: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
      short: {
        year: 'numeric',
        month: 'short',
      },
    },
  },
  messages,
})

export const createApp = ViteSSG(App, { routes }, ({ app }) => {
  app.use(createPinia())
  app.use(i18n)
})

import './assets/main.scss'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = ViteSSG(App, router, ({ app, router, routes, isClient, initialState }) => {
  // install plugins etc.
  app.use(createPinia())
})

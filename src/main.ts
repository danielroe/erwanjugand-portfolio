import './assets/main.scss'
import { createPinia } from 'pinia'
// import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(App, { routes }, ({ app, router, routes, isClient, initialState }) => {
  app.use(createPinia())
})

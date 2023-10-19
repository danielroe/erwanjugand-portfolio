import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import generateSitemap from 'vite-ssg-sitemap'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [Vue(), Pages(), Layouts(), AutoImport({ imports: ['vue', 'vue-router', '@vueuse/core'] })],
  ssgOptions: {
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

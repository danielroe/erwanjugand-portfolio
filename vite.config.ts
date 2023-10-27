import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import generateSitemap from 'vite-ssg-sitemap'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core', '@vueuse/head'],
      eslintrc: {
        enabled: true,
      },
    }),
    VueI18nPlugin({
      include: [fileURLToPath(new URL('./src/locales/**', import.meta.url))],
    }),
  ],
  ssgOptions: {
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },
  ssr: {
    noExternal: [/vue-i18n/],
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

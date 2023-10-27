<template>
  <h1>
    {{ t('title') }}
  </h1>

  <button @click="locale === 'fr' ? (locale = 'en') : (locale = 'fr')">
    {{ locale }}
  </button>
  <RouterLink to="/about"> About </RouterLink>
</template>

<script lang="ts" setup>
const { t, locale } = useI18n()
</script>

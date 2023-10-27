<script setup lang="ts">
import { useHead, type MergeHead } from '@unhead/vue'

const head = computed<MergeHead>(() => {})

useHead(head)
</script>

<template>
  <RouterView />
</template>

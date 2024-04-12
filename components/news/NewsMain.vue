<script setup lang="ts">
import type { PreviewsTextTitleUrl } from '~/types/root'

defineProps<{
  data: PreviewsTextTitleUrl[]
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="grid grid-cols-4 gap-5 laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-4 mobile:grid-cols-1">
    <common-news-card
      v-for="d in data"
      :key="d.url"
      :to="d.url"
      :src="`${config.public.baseURL}${d.preview}`"
      :title="d.title"
      :text="d.text"
    />
  </div>
</template>

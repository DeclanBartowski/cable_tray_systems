<script setup lang="ts">
import type { HomeData } from '~/types/home'

defineProps<{
  data: HomeData
}>()
</script>

<template>
  <div class="container">
    <div class="flex gap-[131px] laptop:gap-[100px] tablet:flex-col tablet:gap-14 mobile:gap-6">
      <main-description-about :data="data.about" />
      <main-description-news :data="data.news" />
    </div>
  </div>
</template>

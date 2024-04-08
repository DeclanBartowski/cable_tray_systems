<script setup lang="ts">
import type { HomeNews } from '~/types/home'

defineProps<{
  data: HomeNews
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col gap-7 laptop:gap-6 laptop:w-full laptop:max-w-[50%] tablet:max-w-full tablet:gap-8 mobile:gap-7">
    <div class="flex justify-between items-center">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        {{ data.title }}
      </h2>
      <ui-button
        :to="data.link"
        :text="data.btn_name"
      />
    </div>
    <div class="grid grid-cols-2 gap-5 tablet:gap-4">
      <common-news-card
        v-for="d in data.items"
        :key="d.url"
        :to="d.url"
        :src="`${config.public.baseURL}${d.preview}`"
        :title="d.title"
        :text="d.text"
      />
    </div>
  </div>
</template>

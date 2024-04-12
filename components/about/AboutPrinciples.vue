<script setup lang="ts">
import type { AboutPrinciples } from '~/types/about'

defineProps<{
  data: AboutPrinciples
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
    <h2 class="text-xl3 font-medium text-center laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
      {{ data.title }}
    </h2>
    <div class="grid grid-cols-4 gap-5 tablet:grid-cols-3 tablet:gap-4 mobile:grid-cols-2">
      <common-card
        v-for="d in data.elements"
        :key="d.title"
        :src="`${config.public.baseURL}${d.svg}`"
        :text="d.title"
      />
    </div>
  </div>
</template>

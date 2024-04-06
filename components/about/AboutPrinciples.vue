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
        :src="`${config.public.baseURL}${data.elements[0].svg}`"
        :text="data.elements[0].title"
      />
      <common-card
        :src="`${config.public.baseURL}${data.elements[1].svg}`"
        :text="data.elements[1].title"
      />
      <common-card
        :src="`${config.public.baseURL}${data.elements[2].svg}`"
        :text="data.elements[2].title"
      />
      <common-card
        :src="`${config.public.baseURL}${data.elements[3].svg}`"
        :text="data.elements[3].title"
      />
      <div class="tablet:hidden" />
      <common-card
        :src="`${config.public.baseURL}${data.elements[4].svg}`"
        :text="data.elements[4].title"
      />
      <common-card
        :src="`${config.public.baseURL}${data.elements[5].svg}`"
        :text="data.elements[5].title"
      />
      <div class="tablet:hidden" />
    </div>
  </div>
</template>

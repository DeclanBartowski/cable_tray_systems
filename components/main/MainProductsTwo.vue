<script setup lang="ts">
import type { HomeSections } from '~/types/home'

defineProps<{
  data: HomeSections
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
    <div class="flex items-end justify-between">
      <h2 class="text-xl4 font-medium w-full max-w-[550px] laptop:text-laptopXl4 tablet:text-tabletXl4 tablet:max-w-[480px] mobile:w-full mobile:text-mobileXl4">
        {{ data.name }}
      </h2>
      <nuxt-link
        :to="data.link"
        class="text-m font-medium transition-all hover:text-gray300 laptop:text-laptopM mobile:text-mobileM"
      >
        Показать все
      </nuxt-link>
    </div>
    <div class="grid grid-cols-3 gap-5 tablet:gap-4 mobile:grid-cols-2">
      <common-products-card
        v-for="d in data.sub"
        :key="d.id"
        :to="d.link"
        :src="`${config.public.baseURL}${d.picture}`"
        :title="d.name"
        :picture="d?.pricture"
      />
    </div>
    <div class="mx-auto">
      <ui-button
        item="color"
        :to="data.link"
        text="В каталог"
        class="w-[138px]"
      />
    </div>
  </div>
</template>

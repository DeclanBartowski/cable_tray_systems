<script setup lang="ts">
import type { HomeAbout } from '~/types/home'

defineProps<{
  data: HomeAbout
}>()
</script>

<template>
  <div class="flex flex-col gap-7 w-full max-w-[530px] laptop:max-w-[50%] laptop:gap-6 tablet:max-w-full tablet:gap-8 mobile:gap-7">
    <div class="flex justify-between items-center">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        {{ data.title }}
      </h2>
      <ui-button
        :to="data.btn_link"
        :text="data.btn_title"
      />
    </div>
    <div class="flex flex-col gap-6 laptop:gap-5 mobile:gap-4">
      <h3 class="text-xl font-medium laptop:text-laptopXl">
        {{ data.subtitle }}
      </h3>
      <div
        class="flex flex-col gap-6 text-l laptop:gap-5 laptop:text-laptopL mobile:gap-4 mobile:text-mobileM"
        v-html="data.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LinkTextTitle } from '~/types/root'

defineProps<{
  data: LinkTextTitle
}>()
</script>

<template>
  <div class="flex flex-col gap-[60px] laptop:gap-12 tablet:gap-10 mobile:gap-8">
    <div class="flex flex-col gap-8 pl-[310px] laptop:pl-[100px] laptop:gap-7 tablet:gap-6 tablet:px-[60px] mobile:px-5">
      <h2 class="text-xl4 font-medium w-full max-w-[750px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        {{ data.title }}
      </h2>
      <div class="flex items-start gap-5 tablet:gap-4 tablet:flex-col">
        <div
          class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4"
          v-html="data.text"
        />
        <img
          src="/test/news-detail.png"
          alt="Изображение"
          class="rounded-l-s laptop:w-[54%] tablet:rounded-s tablet:w-full"
        >
      </div>
    </div>
    <div class="container">
      <div class="flex flex-col gap-6 tablet:gap-5">
        <h3 class="text-xl2 font-medium laptop:text-laptopXl2 mobile:text-mobileXl2">
          {{ data.title }}
        </h3>
        <div class="grid grid-cols-2 gap-5 text-l laptop:text-laptopL tablet:gap-4 mobile:grid-cols-1">
          <div
            class="flex flex-col gap-5 tablet:gap-4"
            v-html="data.text"
          />
          {{ data.text }}
        </div>
      </div>
    </div>
    <div class="container">
      <div class="flex flex-col items-center gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
        <img
          src="/test/news-detail-2.png"
          alt="Изображение"
        >
        <p class="text-xl2 font-medium text-center w-full max-w-[640px] laptop:text-laptopXl2 mobile:text-mobileXl2">
          {{ data.text }}
        </p>
      </div>
    </div>
    <div class="container">
      <div
        class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4"
        v-html="data.text"
      />
    </div>
  </div>
</template>

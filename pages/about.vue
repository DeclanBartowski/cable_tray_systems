<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { AboutDto } from '~/types/about'

const { data: about } = await useContentFetch<AboutDto>('about', {
  method: 'GET'
})
useSeoMeta({
    ogTitle: () => about.value!.data.seo.title,
    title: () => about.value!.data.seo.title,
    description: () => about.value!.data.seo.description,
    ogDescription: () => about.value!.data.seo.description,
    keywords: () => about.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="about"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="about.data.breadcrumb" />
      </div>
      <h2
        v-if="about"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        {{ about.data.main.title }}
      </h2>
      <div
        v-if="about"
        class="flex flex-col gap-[100px] laptop:gap-20 tablet:gap-14 mobile:gap-6"
      >
        <about-intro
          v-if="about"
          :data="about.data.main"
        />
        <about-principles
          v-if="about"
          :data="about.data.principles"
        />
      </div>
    </div>
  </div>
</template>

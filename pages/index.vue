<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { HomeDto } from '~/types/home'

const { data: home } = await useContentFetch<HomeDto>('home', {
  method: 'GET'
})

useSeoMeta({
    ogTitle: () => home.value!.data.seo.title,
    title: () => home.value!.data.seo.title,
    description: () => home.value!.data.seo.description,
    ogDescription: () => home.value!.data.seo.description,
    keywords: () => home.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-[30px] flex flex-col gap-[100px] text-black laptop:gap-20 tablet:gap-14 mobile:gap-6">
    <main-intro
      v-if="home"
      :data="home.data"
    />
    <main-products
      v-if="home"
      :data="home.data?.sections || []"
    />
    <main-description
      v-if="home"
      :data="home.data"
    />
    <common-form />
  </div>
</template>

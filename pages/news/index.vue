<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { NewsDto } from '~/types/news'

const { data: news } = await useContentFetch<NewsDto>('news', {
  method: 'GET',
  query: {
    page: '3'
  }
})

const breadcrumbs = ref([
  {
    label: news.value!.data.breadcrumb[1].title,
    route: news.value!.data.breadcrumb[1].url
  }
])

useServerSeoMeta({
  ogTitle: () => news.value!.data.seo.title,
  title: () => news.value!.data.seo.title,
  description: () => news.value!.data.seo.description,
  ogDescription: () => news.value!.data.seo.description,
  keywords: () => news.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <h2
        v-if="news"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        {{ news.data.title }}
      </h2>
      <news-main
        v-if="news"
        :data="news.data.elements"
      />
    </div>
  </div>
</template>

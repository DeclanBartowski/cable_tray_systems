<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { NewsDetailDto } from '~/types/news'
const route = useRoute();

const { data: detailNews } = await useContentFetch<NewsDetailDto>(`news/${route.params.id}`, {
  method: 'GET'
})

useSeoMeta({
    ogTitle: () => detailNews.value!.data.seo.title,
    title: () => detailNews.value!.data.seo.title,
    description: () => detailNews.value!.data.seo.description,
    ogDescription: () => detailNews.value!.data.seo.description,
    keywords: () => detailNews.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="detailNews"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="detailNews.data.breadcrumb" />
      </div>
    </div>
    <news-detail-main
      v-if="detailNews"
      :data="detailNews.data.info"
    />
  </div>
</template>

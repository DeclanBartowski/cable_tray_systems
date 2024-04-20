<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { NewsDto } from '~/types/news'
import type { PreviewsTextTitleUrl } from '~/types/root'

const { $api } = useNuxtApp()

const page = ref(1)
const articles = ref<PreviewsTextTitleUrl[]>([])
const { data: news } = await useAsyncData<NewsDto>(
  'news',
  (): Promise<NewsDto> => $api('news', {
    method: 'GET',
    params: {
      page: page.value
    }
  }), {
  watch: [page]
})

useServerSeoMeta({
  ogTitle: () => news.value!.data.seo.title,
  title: () => news.value!.data.seo.title,
  description: () => news.value!.data.seo.description,
  ogDescription: () => news.value!.data.seo.description,
  keywords: () => news.value!.data.seo.keywords
})

watchEffect(() => {
  if (news.value) {
    articles.value.push(...news.value.data.elements)
  }
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="news"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="news.data.breadcrumb" />
      </div>
      <h2
        v-if="news"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        {{ news.data.title }}
      </h2>
      <news-main
        v-if="news"
        :data="articles"
      />
      <div
        v-if="news"
        class="mt-5 tablet:mt-4"
      >
        <common-button-more
          v-if="articles.length < news.data.page.itemsCount"
          @click="page += 1"
        />
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {FavoriteDto} from "~/types/favorite";

const breadcrumbs = ref([
	{ label: 'Избранное', route: '/favorites' },
])

const { data: favorite } = await useContentFetch<FavoriteDto>('favorite/', {
  method: 'GET'
})

useServerSeoMeta({
  ogTitle: () => favorite.value!.data.seo.title,
  title: () => favorite.value!.data.seo.title,
  description: () => favorite.value!.data.seo.description,
  ogDescription: () => favorite.value!.data.seo.description,
  keywords: () => favorite.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        Избранное
      </h2>
      <favorites-main />
    </div>
  </div>
</template>

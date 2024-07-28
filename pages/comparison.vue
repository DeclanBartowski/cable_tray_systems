<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CompareDto} from "~/types/comparison";
import {useCompareStore} from "~/stores/compare";

const breadcrumbs = ref([
	{ label: 'Сравнение', route: '/comparison' },
])

const {compare} = toRefs(useCompareStore());

const { data: comparsion } = await useContentFetch<CompareDto>('compare/', {
  method: 'GET'
})


useSeoMeta({
    ogTitle: () => comparsion.value!.data.seo.title,
    title: () => comparsion.value!.data.seo.title,
    description: () => comparsion.value!.data.seo.description,
    ogDescription: () => comparsion.value!.data.seo.description,
    keywords: () => comparsion.value!.data.seo.keywords
})

</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        Сравнение
      </h2>
      <comparison-main />
      <h2 v-if="!compare.length" class="text-xl mt-12 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        В сравнении нет товаров
      </h2>
    </div>
  </div>
</template>

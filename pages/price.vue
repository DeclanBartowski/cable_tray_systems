<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PriceDto } from '~/types/price'

const { data: price } = await useContentFetch<PriceDto>('pricelist', {
  method: 'GET'
})

useSeoMeta({
    ogTitle: () => price.value!.data.seo.title,
    title: () => price.value!.data.seo.title,
    description: () => price.value!.data.seo.description,
    ogDescription: () => price.value!.data.seo.description,
    keywords: () => price.value!.data.seo.keywords
})

</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="price"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="price.data.breadcrumb" />
      </div>
      <h2
        v-if="price"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        {{ price.data.title }}
      </h2>
      <price-main
        v-if="price"
        :data="price.data.elements"
      />
    </div>
  </div>
</template>

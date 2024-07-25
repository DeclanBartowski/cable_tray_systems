<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {RelatedProductsDto} from "~/types/catalog/related-products";
import {useFilterStore} from "~/stores/filters";
const { data: relatedProducts } = await useContentFetch<RelatedProductsDto>('catalog/related-products', {
  method: 'GET',
});

const config = useRuntimeConfig();

useServerSeoMeta({
  ogTitle: () => relatedProducts.value!.data.seo.title,
  title: () => relatedProducts.value!.data.seo.title,
  description: () => relatedProducts.value!.data.seo.description,
  ogDescription: () => relatedProducts.value!.data.seo.description,
  keywords: () => relatedProducts.value!.data.seo.keywords
})

</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="relatedProducts?.data?.breadcrumb" />
      </div>
      <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
        <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
          Сопутствующие товары
        </h2>
        <div class="flex flex-col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
          <div class="flex items-start gap-5 tablet:gap-6 tablet:flex-col">
            <div class="grid grid-cols-4 gap-5 tablet:gap-4 mobile:grid-cols-1">
              <common-products-card v-for="item in relatedProducts?.data?.tree?.sub  || []"
                                    :to="item.link"
                                    :tree="item?.sub"
                                    :title="item?.name"
                                    :src="`${config.public.baseURL}/${item?.picture}`"
                                    :picture="item?.picture"
              />
            </div>
          </div>
          <catalog-related-slider-interesting />
        </div>
      </div>
    </div>
  </div>
</template>

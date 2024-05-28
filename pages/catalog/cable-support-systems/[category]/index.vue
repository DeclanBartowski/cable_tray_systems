<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CableSupportSystemCategoryDto} from "~/types/catalog/cable-support-systems/category";

const route = useRoute();

const { data: category } = await useContentFetch<CableSupportSystemCategoryDto>(`catalog/${route.params.category}`, {
  method: 'GET'
});

useServerSeoMeta({
  ogTitle: () => category.value!.data.seo.title,
  title: () => category.value!.data.seo.title,
  description: () => category.value!.data.seo.description,
  ogDescription: () => category.value!.data.seo.description,
  keywords: () => category.value!.data.seo.keywords
})

</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="category?.data?.breadcrumb" />
      </div>
      <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
        <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
          {{category?.data?.tree?.name || ''}}
        </h2>
        <catalog-cable-category :tree="category?.data?.tree?.sub || []" />
      </div>
    </div>
  </div>
  <catalog-cable-modal />
</template>

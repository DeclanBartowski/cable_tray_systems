<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type {CableSupportSystemDto} from '~/types/catalog/cable-support-systems';

const { data: cableSupportSystems } = await useContentFetch<CableSupportSystemDto>('catalog/cable-support-systems', {
  method: 'GET'
});

useServerSeoMeta({
  ogTitle: () => cableSupportSystems.value!.data.seo.title,
  title: () => cableSupportSystems.value!.data.seo.title,
  description: () => cableSupportSystems.value!.data.seo.description,
  ogDescription: () => cableSupportSystems.value!.data.seo.description,
  keywords: () => cableSupportSystems.value!.data.seo.keywords
})

</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="cableSupportSystems?.data?.breadcrumb" />
      </div>
      <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
        <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
          Кабеленесущие системы
        </h2>
        <div class="flex flex-col gap-5 tablet:gap-4">
          <catalog-cable-main :categories="cableSupportSystems?.data?.sections" />
          <common-button-more />
        </div>
      </div>
    </div>
  </div>
</template>

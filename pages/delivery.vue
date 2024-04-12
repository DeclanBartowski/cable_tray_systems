<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { DeliveryDto } from '~/types/delivery'

const { data: delivery } = await useContentFetch<DeliveryDto>('delivery', {
  method: 'GET'
})

useServerSeoMeta({
  ogTitle: () => delivery.value!.data.seo.title,
  title: () => delivery.value!.data.seo.title,
  description: () => delivery.value!.data.seo.description,
  ogDescription: () => delivery.value!.data.seo.description,
  keywords: () => delivery.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="delivery"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="delivery.data.breadcrumb" />
      </div>
      <h2
        v-if="delivery"
        class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6"
      >
        {{ delivery.data.title }}
      </h2>
      <delivery-main
        v-if="delivery"
        :data="delivery.data.card"
      />
    </div>
  </div>
</template>

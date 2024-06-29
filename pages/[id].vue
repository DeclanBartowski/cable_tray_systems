<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { PolicyDto } from '~/types/policy'
const route = useRoute();

const { data: policy } = await useContentFetch<PolicyDto>('text-page/'+route.params.id, {
  method: 'GET'
})

useServerSeoMeta({
  ogTitle: () => policy.value!.data.seo.title,
  title: () => policy.value!.data.seo.title,
  description: () => policy.value!.data.seo.description,
  ogDescription: () => policy.value!.data.seo.description,
  keywords: () => policy.value!.data.seo.keywords
})
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div
        v-if="policy"
        class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden"
      >
        <ui-breadcrumbs :breadcrumbs="policy.data.breadcrumb" />
      </div>
    </div>
    <policy-main
      v-if="policy"
      :data="policy.data.info"
    />
  </div>
</template>

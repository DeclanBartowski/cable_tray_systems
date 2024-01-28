<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const breadcrumbs = ref([
	{ label: 'Новости', route: '/news' },
])
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
    </div>
    <news-detail-main />
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const breadcrumbs = ref([
	{ label: 'Контакты', route: '/contacts' },
])
</script>

<template>
  <div class="pt-8 text-black laptop:pt-7 tablet:pt-6">
    <div class="container">
      <div class="mb-10 laptop:mb-19 tablet:mb-8 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <h2 class="text-xl4 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
        Контакты
      </h2>
    </div>
    <div class="flex flex-col gap-[100px] laptop:gap-20 tablet:gap-14 mobile:gap-9">
      <contacts-intro />
      <common-form />
    </div>
  </div>
</template>

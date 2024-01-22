<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const breadcrumbs = ref([
	{ label: 'Каталог', route: '/catalog' },
])
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="flex flex-col gap-7 tablet:gap-6">
      <div class="container">
        <div class="mb-11 laptop:mb-10 tablet:mb-9 mobile:hidden">
          <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
        </div>
        <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
          Каталог
        </h2>
      </div>
      <catalog-main />
    </div>
  </div>
</template>

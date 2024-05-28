<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const breadcrumbs = ref([
	{ label: 'Каталог', route: '/catalog' },
	{ label: 'Кабеленесущие системы', route: '/catalog/cable-support-systems' },
	{ label: 'Лотки кабельные', route: '/catalog/cable-support-systems/category' },
	{ label: 'Простого типа', route: '/catalog/cable-support-systems/category/cable' },
])
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="flex items-start gap-[57px] laptop:gap-12 tablet:gap-10 tablet:flex-col">
        <catalog-product-slider :images="[]" />
        <catalog-product-information :product="null" />
      </div>
    </div>
    <catalog-product-documentation :description="''" :characters="[]" :documents="[]" />
    <div class="container">
      <div class="flex flex-col gap-[108px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
        <catalog-product-slider-related />
        <catalog-product-slider-similar />
      </div>
    </div>
  </div>
</template>

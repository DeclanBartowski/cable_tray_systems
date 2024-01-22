<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const breadcrumbs = ref([
	{ label: 'Каталог', route: '/catalog' },
	{ label: 'Кабеленесущие системы', route: '/catalog/cable-support-systems' },
	{ label: 'Лотки кабельные', route: '/catalog/cable-support-systems/category' },
])
</script>

<template>
  <div class="pt-8 pb-[100px] text-black laptop:pt-7 laptop:pb-20 tablet:pt-6 tablet:pb-14 mobile:pb-6">
    <div class="container">
      <div class="mb-10 laptop:mb-10 tablet:mb-9 mobile:hidden">
        <ui-breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
        <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
          Лотки кабельные
        </h2>
        <catalog-cable-category />
      </div>
    </div>
  </div>
</template>

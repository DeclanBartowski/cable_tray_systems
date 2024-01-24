<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
    <div class="flex items-end justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Кабеленесущие системы
      </h2>
      <nuxt-link
        to="/"
        class="text-m font-medium transition-all hover:text-gray300 laptop:text-laptopM mobile:text-mobileM"
      >
        Показать все
      </nuxt-link>
    </div>
    <div class="grid grid-cols-3 gap-5 tablet:gap-4 mobile:grid-cols-2">
      <common-products-card
        to="/"
        src="/images/products-1.png"
        title="Лотки кабельные"
      />
      <common-products-card
        to="/"
        src="/images/products-2.png"
        title="Аксессуары для кабельных лотков"
      />
      <common-products-card
        to="/"
        src="/images/products-3.png"
        title="Стойки и полки кабельные"
      />
      <common-products-card
        to="/"
        src="/images/products-4.png"
        title="Профиль и полосы монтажные"
      />
      <common-products-card
        to="/"
        src="/images/products-5.png"
        title="Коробки и ящики монтажные"
      />
      <common-products-card
        to="/"
        src="/images/products-6.png"
        title="Электромонтаж"
      />
    </div>
    <div class="mx-auto">
      <ui-button
        item="color"
        to="/"
        text="В каталог"
        class="w-[138px] mobile:w-full"
      />
    </div>
  </div>
</template>

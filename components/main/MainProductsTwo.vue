<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-10 laptop:gap-9 tablet:gap-8 mobile:gap-7">
    <div class="flex items-end justify-between">
      <h2 class="text-xl4 font-medium w-full max-w-[550px] laptop:text-laptopXl4 tablet:text-tabletXl4 tablet:max-w-[480px] mobile:w-full mobile:text-mobileXl4">
        Сопутствующие товары комплексных инженерных систем
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
        src="/images/products-7.png"
        title="Кабеля"
      />
      <common-products-card
        to="/"
        src="/images/products-8.png"
        title="Выключатели автоматические"
      />
      <common-products-card
        to="/"
        src="/images/products-9.png"
        title="Розетки"
      />
      <common-products-card
        to="/"
        src="/images/products-10.png"
        title="Осветительные изделия"
      />
      <common-products-card
        to="/"
        src="/images/products-11.png"
        title="Щитовое оборудование"
      />
      <common-products-card
        to="/"
        src="/images/products-12.png"
        title="Местный и строительный крепёж"
      />
    </div>
    <div class="mx-auto"> 
      <ui-button
        item="color"
        to="/"
        text="В каталог"
        class="w-[138px]"
      />
    </div>
  </div>
</template>

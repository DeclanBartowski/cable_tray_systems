<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-[60px] laptop:gap-14 tablet:gap-12 mobile:gap-10">
    <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
      <h4 class="text-xl2 font-medium text-center laptop:text-laptopXl2">
        Простые
      </h4>
      <div class="grid grid-cols-2 gap-5 tablet:gap-4 mobile:grid-cols-1">
        <catalog-cable-category-card
          title="Перфорированные лотки простого типа"
          src="/test/product-cable.png"
        />
        <catalog-cable-category-card
          title="Глухие неперфорированные лотки замкового типа"
          src="/test/product-cable.png"
        />
      </div>
    </div>
    <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
      <h4 class="text-xl2 font-medium text-center laptop:text-laptopXl2">
        Замковые
      </h4>
      <div class="grid grid-cols-2 gap-5 tablet:gap-4 mobile:grid-cols-1">
        <catalog-cable-category-card
          title="Перфорированные лотки замкового типа"
          src="/test/product-cable.png"
        />
        <catalog-cable-category-card
          title="Глухие неперфорированные лотки замкового типа"
          src="/test/product-cable.png"
        />
      </div>
    </div>
  </div>
</template>

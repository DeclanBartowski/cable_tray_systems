<script setup lang="ts">
defineProps<{ src: string, name: string, price: string }>()
</script>

<template>
  <div class="relative bg-white pt-[19px] pr-3 pb-3 pl-4 border border-solid border-gray100 rounded-s flex flex-col gap-2 max-w-[200px] min-h-[200px] laptop:py-3 laptop:px-3 laptop:w-[165px]">
    <img
      :src="src"
      alt="Продукт"
      class="mx-auto w-20 h-20"
    >
    <div class="flex flex-col gap-2 laptop:gap-3">
      <h4 class="text-s text-center">
        {{ name }}
      </h4>
      <div class="flex items-end justify-between">
        <span class="text-m font-medium lining-nums proportional-nums  laptop:text-laptopM mobile:text-mobileM">{{ price }} ₽</span>
        <common-button-cart />
      </div>
    </div>
    <close class="text-gray200 absolute top-2 right-4 transition-all hover:text-black laptop:right-3" />
  </div>
</template>

<script setup lang="ts">

import type {ProductItem} from "~/types/comparison";

defineProps<{
  compareItems: ProductItem[];
}>();

const config = useRuntimeConfig();


</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-start pl-6 gap-[115px] mobile:flex-col mobile:gap-6 mobile:overflow-x-auto">
      <button class="border-none text-m font-medium laptop:text-laptopM mobile:text-mobileM">
        показать только отличия
      </button>
      <div class="flex gap-5 tablet:overflow-x-auto mobile:overflow-x-hidden">
        <comparison-product-card v-for="item in compareItems"
          :src="`${config.public.baseURL}${item.image}`"
          :name="`${item.name}`"
          :price="`${item.price}`"
        />
      </div>
    </div>
  <comparison-characteristics-accordion :compare-items="compareItems"/>
  </div>
</template>

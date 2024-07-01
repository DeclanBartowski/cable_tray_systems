<script setup lang="ts">

import type {ProductItem} from "~/types/comparison";
import {useCompareStore} from "~/stores/compare";
import {useCartStore} from "~/stores/cart";

defineProps<{
  compareItems: ProductItem[];
}>();


const showOnlyDiff = ref(false);

const compareStore = useCompareStore();
const cartStore = useCartStore();

const config = useRuntimeConfig();

</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-start pl-6 gap-[115px] mobile:flex-col mobile:gap-6 mobile:overflow-x-auto">
      <button @click="showOnlyDiff = !showOnlyDiff" class="border-none text-m font-medium laptop:text-laptopM mobile:text-mobileM">
        показать только отличия
      </button>
      <div class="flex gap-5 tablet:overflow-x-auto mobile:overflow-x-hidden">
        <comparison-product-card v-for="item in compareItems"
         :id="item.id"
          :src="`${config.public.baseURL}${item.image}`"
          :name="`${item.name}`"
          :price="`${item.price}`"
          @delete-from-compare="compareStore.deleteFromCompare"
          @add-in-cart="cartStore.addProductInCart"
        />
      </div>
    </div>
  <comparison-characteristics-accordion :only-diff="showOnlyDiff" :compare-items="compareItems"/>
  </div>
</template>

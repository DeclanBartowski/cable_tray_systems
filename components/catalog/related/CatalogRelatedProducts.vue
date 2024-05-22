<script setup lang="ts">
import type {Product, SortField} from '~/types/catalog/related-products';
import {useFilterStore} from "~/stores/filters";
defineProps<{
  products: Product[];
  sortFields: SortField[];
}>()

const {sortField, query} = toRefs(useFilterStore());
const router = useRouter();

watch(sortField, () => {
  query.value.sort = sortField.value.code;
  router.push({query: {...query.value}});

})

</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-start gap-4">
      <span class="text-m laptop:text-laptopM mobile:text-mobileM">Сортировка:</span>
      <ui-select :sort-fields="sortFields" v-model="sortField" />
    </div>
    <div class="flex flex-col gap-5 tablet:gap-4">
      <div class="grid grid-cols-3 auto-rows-default laptop:auto-rows-defaultLaptop tablet:auto-rows-defaultTablet mobile:auto-rows-defaultMobile gap-5 items-start tablet:gap-4 laptop:grid-cols-2 mobile:grid-cols-1">
        <ui-card
          v-for="product in products"
          :key="product.to || ''"
          :to="product.to || ''"
          :src="product.image?.src || ''"
          :name="product.name"
          :description="product.text"
          :price="product.discount"
          :old-price="product.price"
          :ratio="product.ratio"
          :is-favorite="product.favorite"
          :is-bar="product.compare"
        />
      </div>
      <common-button-more />
    </div>
  </div>
</template>

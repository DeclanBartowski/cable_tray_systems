<script setup lang="ts">
import type {Filter} from '~/types/catalog/related-products';
import {useFilterStore} from "~/stores/filters";

const props = defineProps<{
  priceFilter: Filter;
  typeFilter: Filter;
  viewFilter: Filter;
  heightFilter: Filter;
}>();

const filters = useFilterStore();

const router = useRouter();

const resetFilters = () => {
  router.push({query: {}});
  filters.setHeight([]);
  filters.setView('');
  filters.setType('');
  filters.setPriceFrom(+props.priceFilter.VALUES['MIN'].VALUE || 0);
  filters.setPriceTo(+props.priceFilter.VALUES['MAX'].VALUE || 0);
}

</script>

<template>
  <div class="w-[310px] flex flex-col gap-[1px] tablet:w-full">
    <catalog-related-filter-price :price-filter="priceFilter" />
    <catalog-related-filter-type :type-filter="typeFilter" />
    <catalog-related-filter-view :view-filter="viewFilter" />
    <catalog-related-filter-height @reset-filters="resetFilters" :height-filter="heightFilter" />
  </div>
</template>

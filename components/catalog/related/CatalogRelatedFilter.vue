<script setup lang="ts">
import type { Filter } from '~/types/catalog/related-products';
import { useFilterStore } from "~/stores/filters";
import { useRouter } from 'vue-router';

const props = defineProps<{
  filtersData: Filter[];
}>();

const filters = useFilterStore();
const router = useRouter();
const priceFilter = computed(() => props.filtersData.find(filter => filter.CODE === 'PRICE'));
const resetFilters = () => {

  const priceFilterValue = priceFilter.value;

  if (priceFilterValue) {
    const minValue = priceFilterValue.VALUES.find(v => v.CONTROL_NAME.includes('_MIN'));
    const maxValue = priceFilterValue.VALUES.find(v => v.CONTROL_NAME.includes('_MAX'));

    if (minValue && maxValue) {
      filters.setPriceFrom(+minValue.VALUE);
      filters.setPriceTo(+maxValue.VALUE);
    }
  }

  filters.resetFilters();

  console.log(filters.query);
  router.push({ query: filters.query });
}
</script>

<template>
  <div class="w-[310px] flex flex-col gap-[1px] tablet:w-full">
    <template v-for="filter in filtersData">
      <catalog-related-filter-price
        v-if="filter.CODE=='PRICE'"
        :price-filter="filter"
      />
      <catalog-related-filter-height
        v-if="filter.DISPLAY_TYPE=='F'"
        :height-filter="filter"
      />
    </template>
    <div class="flex flex-col gap-5 tablet:gap-4">
      <button
        class="flex items-center justify-center py-[14px] px-8 border-none bg-white rounded-l text-m font-medium text-gray300 transition-all hover:bg-gray300 hover:text-white laptop:text-laptopM mobile:text-mobileM"
        @click="resetFilters"
      >
        Сбросить фильтр
      </button>
    </div>
  </div>
</template>

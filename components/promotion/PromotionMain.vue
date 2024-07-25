<script setup lang="ts">

import type {Product} from "~/types/catalog/category";
import {useFilterStore} from "~/stores/filters";
import type {Page, Seo} from "~/types/root";

defineProps<{
  categoryProducts: Product[];
  pagination: Page;
}>();

const emit = defineEmits<{
  nextPage?: [];
  toggleCompare?: [id: number, compareStatus: boolean];
  toggleFavorite?: [id: number, favoriteStatus: boolean];
}>()

const route = useRoute();

const toggleFavoriteCategory = (id: number, favoriteStatus: boolean) => emit('toggleFavorite', id, favoriteStatus);
const toggleCompareCategory = (id: number, compareStatus: boolean) => emit('toggleCompare', id, compareStatus);

const {categoryPageSortFields, categoryPageSortField, query} = toRefs(useFilterStore());
categoryPageSortField.value = categoryPageSortFields.value[0] || {};

query.value.q = route.query.q?.toString() || '';

const router = useRouter();
const config = useRuntimeConfig();

watch(categoryPageSortField, () => {
  query.value.sort = categoryPageSortField.value.code;
  router.push({query: {...query.value}});
})

</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex items-start gap-4">
      <span class="text-m laptop:text-laptopM mobile:text-mobileM">Сортировка:</span>
      <ui-select :sort-fields="categoryPageSortFields" v-model="categoryPageSortField" />
    </div>
    <div class="flex flex-col gap-5 tablet:gap-4">
      <div class="grid grid-cols-3 auto-rows-default laptop:auto-rows-defaultLaptop tablet:auto-rows-defaultTablet mobile:auto-rows-defaultMobile gap-5 items-start laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-4 mobile:grid-cols-1">
        <ui-card
          v-for="product in categoryProducts"
          :id="product.id"
          :key="product.url"
          :to="product.url"
          :src="`${product.image ? config.public.baseURL + product.image : ''}`"
          :name="product.name"
          :description="product.text"
          :price="product.discount"
          :old-price="product.price"
          :is-favorite="product.favorite"
          :is-bar="product.compare"
          :ratio="product.ratio"
          :offer="product.offer"
          :discount-percent="product.discount_percent"
          @toggle-favorite="toggleFavoriteCategory"
          @toggle-compare="toggleCompareCategory"
        />
      </div>
      <common-button-more v-if="pagination?.pageCount > 1" @click="$emit('nextPage')" />
    </div>
  </div>
</template>

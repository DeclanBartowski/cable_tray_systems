<script setup lang="ts">

import type {Product} from "~/types/catalog/category";
import {useFilterStore} from "~/stores/filters";
import type {Seo} from "~/types/root";
import {useCartStore} from "~/stores/cart";
import {useFavoriteStore} from "~/stores/favorite";

defineProps<{
  categoryProducts: Product[];
  pagination: Seo;
}>();

const emit = defineEmits<{
  nextPage?: [];
  toggleFavorite?: [id: number, favoriteStatus: boolean];
}>()

const toggleFavoriteCategory = (id: number, favoriteStatus: boolean) => emit('toggleFavorite', id, favoriteStatus);

const {$api} = useNuxtApp();

const {categoryPageSortFields, categoryPageSortField, query} = toRefs(useFilterStore());

const {products, total} = toRefs(useCartStore());

const router = useRouter();
const config = useRuntimeConfig();

const addProductInCart =  async (productId?: number, quantity?: number) => {
  await $api('basket-add/', {
    method: 'POST',
    body: {
      product: productId,
      quantity,
    },
    onResponse({response}) {
      products.value = response._data?.data?.products || [];
      if (response._data?.data?.total) {
        total.value = response._data?.data?.total;
      }
    }
  })
}

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
      <div class="grid grid-cols-4 auto-rows-default laptop:auto-rows-defaultLaptop tablet:auto-rows-defaultTablet mobile:auto-rows-defaultMobile gap-5 items-start laptop:grid-cols-3 tablet:grid-cols-2 tablet:gap-4 mobile:grid-cols-1">
        <ui-card
          v-for="product in categoryProducts"
          :id="product.id"
          :key="`/catalog/${product.section_code}/${product.id}`"
          :to="`/catalog/${product.section_code}/${product.id}`"
          :src="`${config.public.baseURL}${product.image}`"
          :name="product.name"
          :description="product.text"
          :price="product.discount"
          :old-price="product.price"
          :is-favorite="product.favorite"
          @toggle-favorite="toggleFavoriteCategory"
          @add-product-in-cart="addProductInCart"
        />
      </div>
      <common-button-more @click="$emit('nextPage')" />
    </div>
  </div>
</template>

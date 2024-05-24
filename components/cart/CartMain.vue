<script setup lang="ts">
import {useCartStore} from "~/stores/cart";

const {$api} = useNuxtApp();

const {products, total} = toRefs(useCartStore());

const config = useRuntimeConfig();
const deleteItemFromCart = async (itemId: number) => {
  await $api('basket-delete/', {
    method: 'POST',
    body: {
      basket: itemId
    },
    onResponse({response}) {
      products.value = response._data?.data?.products || [];
      if(response._data?.data?.total) {
        total.value = response._data?.data?.total;
      }
    }
  })
}

const deleteAllItemsFromCart = async () => {
  for(const item of products.value) {
    await deleteItemFromCart(item.id);
  }
}


</script>

<template>
  <div class="flex items-start justify-between tablet:flex-col tablet:justify-normal tablet:gap-8">
    <div class="flex flex-col gap-6 w-full max-w-[640px] laptop:max-w-[580px] tablet:max-w-full">
      <div class="pb-2 border-b border-solid border-gray100">
        <button @click="deleteAllItemsFromCart" class="border-none text-m text-gray200 flex items-center gap-3 laptop:text-laptopM mobile:text-mobileM">
          <close/>
          Удалить все товары
        </button>
      </div>
      <div class="flex flex-col gap-5">
        <cart-card v-for="item in products"
          :src="`${config.public.baseURL}/${item?.image || ''}`"
          :name="item.name"
          :characteristics="item.params"
          :price="item.discount ? item.discountFormat : item.finalPriceFormat"
          :old-price="item.discount ? item.finalPriceFormat : ''"
           @delete-basket-item="deleteItemFromCart"
           :id="item.id"
           :is-favorite="item.favorite"
        />
      </div>
    </div>
    <div class="pt-4 tablet:pt-0 tablet:w-full">
      <cart-order/>
    </div>
  </div>
</template>

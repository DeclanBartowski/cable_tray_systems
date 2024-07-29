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
      <div v-if="products?.length" class="pb-2 border-b border-solid border-gray100">
        <button @click="deleteAllItemsFromCart" class="border-none text-m text-gray200 flex items-center gap-3 laptop:text-laptopM mobile:text-mobileM">
          <close/>
          Удалить все товары
        </button>
      </div>
      <div class="flex flex-col gap-5" v-if="products.length">
        <cart-card v-for="(item,index) in products"
                   :url="item.url"
                   :id="item.id"
                   :key="index"
                   :product-id="item.product_id"
                   :src="`${item.image ? config.public.baseURL + '/' +item.image: ''}`"
                   :name="item.name"
                   :characteristics="item.params"
                   :price="item.discount ? item.discountFormat : item.finalPriceFormat"
                   :old-price="item.discount ? item.finalPriceFormat : ''"
                   :is-favorite="item.favorite"
                   :quantity="item.quantity"
                   :ratio="item.ratio"
                   :is-bar="item.compare"
        />
      </div>
      <div v-else class="flex justify-center items-center">
        <h2 class="text-xl mt-20 font-medium mb-[33px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4 laptop:mb-8 tablet:mb-7 mobile:mb-6">
          В корзине нет товаров
        </h2>
      </div>
    </div>
    <div class="pt-4 tablet:pt-0 tablet:w-full" v-if="products.length">
      <cart-order/>
    </div>
  </div>
</template>

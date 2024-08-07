<script setup lang="ts">
import {useCartStore} from "~/stores/cart";

const rootStore = useRootStore()
const { isOpenOrderFast, isShowHeader} = storeToRefs(rootStore)

useHead({
  bodyAttrs: {
    class: isOpenOrderFast.value ? "overflow-hidden" : "",
  }
})

const config = useRuntimeConfig();

const {products, total} = toRefs(useCartStore());

const {$api} = useNuxtApp();

const closeFastOrder = () => {
    isShowHeader.value = true;
    isOpenOrderFast.value = false;
}


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

</script>

<template>
  <div class="bg-white text-black fixed top-0 right-0 h-screen overflow-hidden w-[640px] z-10 mobile:w-[calc(100%-24px)]">
    <div class="pt-10 laptop:pt-9 tablet:pt-8 mobile:pt-7">
      <div class="flex items-start justify-between pl-9 pr-11 laptop:px-10 tablet:pl-7 tablet:pr-8 mobile:px-4 mb-10 laptop:mb-9 tablet:mb-8 mobile:mb-7">
        <h2 class="text-xl3 font-medium lining-nums proportional-nums laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
          Корзина ({{products.length}})
        </h2>
        <button class="border-none text-black">
          <close @click="closeFastOrder" />
        </button>
      </div>
      <div v-if="products.length" class="flex flex-col gap-5 pl-4 pr-6 w-full mb-11 laptop:mb-10 tablet:gap-4 tablet:pr-5 tablet:mb-9 mobile:mb-8 mobile:pr-4">
        <cart-card v-for="item in products"
                   :src="`${item.image ? config.public.baseURL + '/' +item.image: ''}`"
                   :name="item.name"
                   :characteristics="item.params"
                   :price="item.discount ? item.discountFormat : item.finalPriceFormat"
                   :old-price="item.discount ? item.finalPriceFormat : ''"
                   @delete-basket-item="deleteItemFromCart"
                   :id="item.id"
                   :url="item.url"
                   :product-id="item.product_id"
                   :quantity="item.quantity"
                   :ratio="item.ratio"
                   :is-bar="item.compare"
        />
      </div>
      <div v-else  class="flex items-start justify-between pl-9 pr-11 laptop:px-10 tablet:pl-7 tablet:pr-8 mobile:px-4 mb-10 laptop:mb-9 tablet:mb-8 mobile:mb-7">
        <h2 class="text-xl font-medium lining-nums proportional-nums laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3">
          В корзине нет товаров
        </h2>
      </div>
      <div class="flex items-end gap-[65px] pl-9 mb-5 laptop:pl-10 tablet:pl-7 mobile:pl-4 tablet:mb-4">
        <span class="text-xl font-medium laptop:text-laptopXl mobile:text-mobileM">Итого к оплате:</span>
        <span class="text-xl3 font-medium lining-nums proportional-nums laptop:text-laptopXl3 tablet:text-tabletXl3 mobile:text-mobileXl3" v-html="total.priceFormat"></span>
      </div>
      <div class="flex items-center gap-5 tablet:gap-4 pl-9 laptop:pl-10 tablet:pl-7 mobile:px-4 mobile:flex-col">
        <ui-button
          @click="closeFastOrder"
          text="Оформить заказ"
          :to="'/orders'"
          fill="fill"
          class="mobile:w-full"
        />
        <ui-button
          @click="closeFastOrder"
          text="Перейти в корзину"
          class="mobile:w-full"
        />
      </div>
    </div>
  </div>
</template>

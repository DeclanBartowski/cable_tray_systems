<script setup lang="ts">

import type {Product, ProductDto} from "~/types/catalog/category/id";
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";

const {$api} = useNuxtApp();

const favoriteStore = useFavoriteStore();
const compareStore = useCompareStore();

const products = ref<Product[]>();
const route = useRoute();

$api(`product/${route.params.id}`, {
  method: 'GET',
  onResponse({response}) {
    products.value = [...response._data?.data?.element?.more_items] || [];
  },
})


const toggleRelatedProductFavorite = async (id: number, favoriteStatus: boolean) => {
  await favoriteStore.toggleFavorite(id, favoriteStatus);
  await $api(`product/${route.params.id}`, {
    method: 'GET',
    onResponse({response}) {
      products.value = [...response._data?.data?.element?.more_items] || [];
    },
  })
}
const toggleRelatedProductCompare = async (id: number, compareStatus: boolean) => {
  await compareStore.toggleCompare(id, compareStatus);
  await $api(`product/${route.params.id}`, {
    method: 'GET',
    onResponse({response}) {
      products.value = [...response._data?.data?.element?.more_items] || [];
    },
  })
}

const config = useRuntimeConfig();

</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6" v-if="products?.length">
    <div class="flex items-center justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Сопутствующие товары
      </h2>
      <div class="flex items-center">
        <button class="relatedPrev border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/prev.svg">
        </button>
        <button class="relatedNext border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/next.svg">
        </button>
      </div>
    </div>
    <swiper
      :modules="[SwiperNavigation]"
      :height="320"
      :navigation="{
        prevEl: '.relatedPrev',
        nextEl: '.relatedNext'
      }"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }"
      class="w-full"
    >
      <swiper-slide
        v-for="item in products"
        :id="item.id"
        :key="`catalog/${item.code}`"
        class="!w-[310px] laptop:!w-auto"
      >
        <ui-card
          :id="item.id"
          :to="`/catalog/${item.section_code}/${item.code}`"
          :is-favorite="item.favorite"
          :src="`${item.image ? config.public.baseURL + item.image : ''}`"
          :name="item.name"
          :description="item.text"
          :price="item.discount ? item.discount : item.price"
          :old-price="item.discount ? item.price : ''"
          :is-bar="item.compare"
          :ratio="item.ratio"
          :offer="item.offer"
          :discount-percent="item.discount_percent"
          @toggle-favorite="toggleRelatedProductFavorite"
          @toggle-compare="toggleRelatedProductCompare"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

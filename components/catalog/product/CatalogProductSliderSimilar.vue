<script setup lang="ts">

import type {Product} from "~/types/catalog/category";

const {$api} = useNuxtApp();
const products = ref<Product[]>();
const route = useRoute();
const favoriteStore = useFavoriteStore();

$api(`product/${route.params.id}`, {
  method: 'GET',
  onResponse({response}) {
    products.value = [...response._data?.data?.element?.similar_items] || [];
  },
})

const config = useRuntimeConfig();

const toggleRelatedProductFavorite = async (id: number, favoriteStatus: boolean) => {
  await favoriteStore.toggleFavorite(id, favoriteStatus);
  $api(`product/${route.params.id}`, {
    method: 'GET',
    onResponse({response}) {
      products.value = [...response._data?.data?.element?.similar_items] || [];
    },
  })
}


</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Похожие товары
      </h2>
      <div class="flex items-center">
        <button class="similarPrev border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/prev.svg">
        </button>
        <button class="similarNext border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/next.svg">
        </button>
      </div>
    </div>
    <swiper
      :modules="[SwiperNavigation]"
      :height="320"
      :navigation="{
        prevEl: '.similarPrev',
        nextEl: '.similarNext'
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
            :src="`${config.public.baseURL}${item.image || ''}`"
            :name="item.name"
            :description="item.text"
            :price="item.discount ? item.discount : item.price"
            :old-price="item.discount ? item.price : ''"
            :is-bar="item.compare"
            @toggle-favorite="toggleRelatedProductFavorite"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

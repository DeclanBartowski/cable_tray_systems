<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {storeToRefs} from "pinia";
import {useFavoriteStore} from "~/stores/favorite";

const {recommendedItems} = storeToRefs(useCartStore());
const { toggleFavorite } = toRefs(useFavoriteStore());


const config = useRuntimeConfig();
</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Рекомендуем
      </h2>
      <div class="flex items-center">
        <button class="recommendPrev border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/prev.svg">
        </button>
        <button class="recommendNext border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/next.svg">
        </button>
      </div>
    </div>
    <swiper
      :modules="[SwiperNavigation]"
      :height="320"
      :navigation="{
        prevEl: '.recommendPrev',
        nextEl: '.recommendNext'
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
      <swiper-slide v-if="recommendedItems.length"
        v-for="item in recommendedItems"
        :key="`catalog/${item.section_code}/${item.id}`"
        class="!w-[310px] laptop:!w-auto"
      >
        <ui-card
          :id="item.id"
          :to="`catalog/${item.section_code}/${item.id}`"
          :src="`${config.public.baseURL}/${item.image || ''}`"
          :name="item.name"
          :description="item.text"
          :price="item.discount ? item.discount : item.price"
          :old-price="item.discount ? item.price : ''"
          :quantity="item.ratio"
          :is-favorite="item.favorite"
          @toggle-favorite="toggleFavorite"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

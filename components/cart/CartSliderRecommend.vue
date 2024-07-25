<script setup lang="ts">
import {useCartStore} from "~/stores/cart";
import {storeToRefs} from "pinia";
import {useFavoriteStore} from "~/stores/favorite";
import {useCompareStore} from "~/stores/compare";

const {recommendedItems} = storeToRefs(useCartStore());
const { toggleFavorite } = toRefs(useFavoriteStore());
const {toggleCompare} = toRefs(useCompareStore());


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
        :key="item.url"
        class="!w-[310px] laptop:!w-auto"
      >
        <ui-card
          :id="item.id"
          :to="item.url"
          :src="`${item.image ? config.public.baseURL + item.image : ''}`"
          :name="item.name"
          :description="item.text"
          :price="item.discount ? item.discount : item.price"
          :old-price="item.discount ? item.price : ''"
          :quantity="item.ratio"
          :is-favorite="item.favorite"
          :is-bar="item.compare"
          :ratio="item.ratio"
          :offer="item.offer"
          :discount-percent="item.discount_percent"
          @toggle-favorite="toggleFavorite"
          @toggle-compare="toggleCompare"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

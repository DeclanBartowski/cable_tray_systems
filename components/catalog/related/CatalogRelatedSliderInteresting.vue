<script setup lang="ts">
import type {Product} from "~/types/catalog/category";

defineProps<{
  interested: Product[];
}>();

const emit = defineEmits<{
  toggleCompare?: [id: number, compareStatus: boolean];
  toggleFavorite?: [id: number, favoriteStatus: boolean];
}>()

const config = useRuntimeConfig();

const toggleFavoriteCategory = (id: number, favoriteStatus: boolean) => emit('toggleFavorite', id, favoriteStatus);
const toggleCompareCategory = (id: number, compareStatus: boolean) => emit('toggleCompare', id, compareStatus);
</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        Возможно, вас заинтересует
      </h2>
      <div class="flex items-center">
        <button class="interestingPrev border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/prev.svg">
        </button>
        <button class="interestingNext border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray">
          <img src="/svg/next.svg">
        </button>
      </div>
    </div>
    <swiper
      :modules="[SwiperNavigation]"
      :height="320"
      :navigation="{
        prevEl: '.interestingPrev',
        nextEl: '.interestingNext'
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
          v-for="product in interested"
        :key="product.url"
        class="!w-[310px] laptop:!w-auto"
      >
        <ui-card
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
            @toggle-favorite="toggleFavoriteCategory"
            @toggle-compare="toggleCompareCategory"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

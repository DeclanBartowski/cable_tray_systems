<script setup lang="ts">

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
      <swiper-slide
        v-for="slide in slides"
        :key="slide.to"
        class="!w-[310px] laptop:!w-auto"
      >
        <ui-card
          :to="slide.to"
          :src="slide.src"
          :name="slide.name"
          :description="slide.description"
          :price="slide.price"
          :old-price="slide.oldPrice"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

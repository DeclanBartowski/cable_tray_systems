<script setup lang="ts">
defineProps<{ title: string }>()

const myCarousel = ref<null>(null)
const breakpoints = {
  1920: {
    itemsToShow: 4,
    itemToScroll: 4
  },
  1200: {
    itemsToShow: 3,
    itemToScroll: 3
  },
  768: {
    itemsToShow: 2,
    itemToScroll: 2
  },
  320: {
    itemsToShow: 1,
    itemToScroll: 1
  },
}
</script>

<template>
  <div class="flex flex-col gap-8 laptop:gap-7 tablet:gap-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl4 font-medium laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
        {{ title }}
      </h2>
      <div class="flex items-center">
        <button
          class="border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray"
          @click="myCarousel.prev()"
        >
          <img src="/svg/prev.svg">
        </button>
        <button
          class="border-none px-[14px] py-[14px] bg-white rounded-full transition-all hover:bg-gray"
          @click="myCarousel.next()"
        >
          <img src="/svg/next.svg">
        </button>
      </div>
    </div>
    <Carousel
      ref="myCarousel"
      :breakpoints="breakpoints"
    >
      <Slide
        v-for="slide in slides"
        :key="slide.to"
      >
        <ui-card
          :to="slide.to"
          :src="slide.src"
          :name="slide.name"
          :description="slide.description"
          :price="slide.price"
          :old-price="slide.oldPrice"
        />
      </Slide>
    </Carousel>
  </div>
</template>

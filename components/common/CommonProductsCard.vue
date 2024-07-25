<script setup lang="ts">
withDefaults(defineProps<{
  to: string,
  title: string,
  src: string,
  alt?: string,
  item?: string
  picture?: string
}>(), {
  alt: '',
  item: ''
})
</script>

<template>
  <nuxt-link
    :to="to"
    :item="item"
    class="relative bg-white pt-7 pr-6 pb-4 pl-7 border border-solid border-gray100 rounded-s flex flex-col justify-between h-[200px] transition-all hover:border hover:border-solid hover:border-yellow laptop:h-[210px] tablet:h-[200px] tablet:py-6 tablet:px-6 mobile:py-4 mobile:px-4 mobile:h-[180px]"
  >
    <div class="tablet:flex tablet:flex-col-reverse tablet:gap-4">
      <h4 class="text-xl font-medium w-[196px] laptop:text-laptopL tablet:w-full mobile:text-mobileM">
        {{ title }}
      </h4>
      <span
        v-if="item === 'new'"
        class="absolute py-2 px-4 w-[90px] bg-yellow text-s rounded-l top-4 right-4 tablet:static tablet:top-0 tablet:right-0"
      >Новинка</span>
    </div>
    <div class="flex justify-end tablet:justify-normal">
      <img
        v-if="picture"
        :src="src"
        :alt="title"
        class="w-[240px] h-[110px] laptop:w-[220px] laptop:h-[100px] tablet:w-[200px] tablet:h-20 mobile:w-[180px] mobile:h-[60px]"
      >
    </div>
  </nuxt-link>
</template>

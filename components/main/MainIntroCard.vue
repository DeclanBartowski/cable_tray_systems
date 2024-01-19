<script setup lang="ts">
defineProps<{ title: string, to: string, src: string }>()
</script>

<template>
  <div class="bg-gray pt-6 pr-12 pb-[30px] pl-10 rounded-s flex justify-between h-[220px] laptop:h-auto laptop:px-10 laptop:pb-6 mobile:py-4 mobile:px-4">
    <div class="flex flex-col gap-5 tablet:gap-4">
      <h2 class="text-xl2 font-medium laptop:text-laptopXl2">
        {{ title }}
      </h2>
      <nuxt-link
        :to="to"
        class="text-s laptop:text-laptopS"
      >
        Подробнее
      </nuxt-link>
    </div>
    <img
      :src="src"
      alt="Изображение"
      class="w-[160px] h-[160px] laptop:w-[140px] laptop:h-[140px] tablet:w-[120px] tablet:h-[120px] mobile:w-[80px] mobile:h-[80px]"
    >
  </div>
</template>

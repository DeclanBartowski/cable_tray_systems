<script setup lang="ts">
defineProps<{ src: string, text: string }>()
</script>

<template>
  <div
    class="pt-[30px] px-[30px] pb-[26px] bg-white border border-solid border-gray100 rounded-s flex flex-col gap-6 laptop:gap-5 laptop:px-6 laptop:pt-6 laptop:pb-5 mobile:py-4 mobile:px-4 mobile:gap-5"
  >
    <img
      :src="src"
      alt="Изображение"
      class="w-10 h-10 mx-auto"
    >
    <p class="text-m text-center laptop:text-laptopM mobile:text-mobileM">
      {{ text }}
    </p>
  </div>
</template>

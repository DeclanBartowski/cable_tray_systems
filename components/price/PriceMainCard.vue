<script setup lang="ts">
defineProps<{ 
  title: string,
  src: string 
}>()
</script>

<template>
  <div
    class="py-9 px-[60px] flex flex-col justify-between gap-2 border border-solid border-gray100 rounded-s laptop:min-h-[142px] laptop:px-10 laptop:py-7 mobile:h-auto mobile:py-6 mobile:px-8"
  >
    <h3 class="text-m text-center laptop:text-laptopM mobile:text-mobileM">
      {{ title }}
    </h3>
    <img
      :src="src"
      class="mx-auto"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, title: string, text: string }>()
</script>

<template>
  <div class="w-[310px] laptop:w-full">
    <img
      :src="src"
      alt="Изображение"
      class="rounded-t-s w-[310px] h-[200px] laptop:w-full laptop:h-[160px] mobile:h-[140px]"
    >
    <div
      class="pt-4 px-4 pb-5 border-x-[1px] border-x-solid border-x-gray border-b-[1px] border-b-solid border-b-gray rounded-b-s flex flex-col gap-3 mobile:px-3 mobile:py-3 mobile:gap-2"
    >
      <h3 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
        {{ title }}
      </h3>
      <p class="text-s text-gray300 laptop:text-laptopS">
        {{ text }}
      </p>
    </div>
  </div>
</template>

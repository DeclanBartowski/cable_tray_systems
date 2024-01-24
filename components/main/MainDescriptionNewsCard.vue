<script setup lang="ts">
defineProps<{ src: string, title: string, text: string }>()
</script>

<template>
  <nuxt-link
    to="/"
    class="w-[310px] laptop:w-full"
  >
    <img
      :src="src"
      alt="Изображение"
      class="rounded-t-s w-[310px] h-[200px] laptop:w-full laptop:h-[160px] mobile:h-[140px]"
    >
    <div
      class="pt-4 px-4 pb-5 border-[1px] border-t-none border-solid border-gray rounded-b-s flex flex-col gap-3 transition-all hover:border hover:border-solid hover:border-t-transparent hover:border-yellow mobile:px-3 mobile:py-3 mobile:gap-2"
    >
      <h3 class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">
        {{ title }}
      </h3>
      <p class="text-s text-gray300 laptop:text-laptopS">
        {{ text }}
      </p>
    </div>
  </nuxt-link>
</template>

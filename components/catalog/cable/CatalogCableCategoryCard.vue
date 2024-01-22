<script setup lang="ts">
defineProps<{ title: string, src: string }>()
</script>

<template>
  <nuxt-link
    to="/catalog/cable-support-systems/category/id"
    class="bg-white py-7 pr-10 pl-[60px] rounded-s border border-solid border-gray100 flex flex-col gap-10 transition-all hover:border hover:border-solid hover:border-yellow laptop:gap-9 tablet:py-6 tablet:px-6 tablet:gap-8 mobile:py-4 mobile:px-4 mobile:gap-7"
  >
    <h3 class="text-xl font-medium text-center laptop:text-laptopXl">
      {{ title }}
    </h3>
    <div class="flex justify-between tablet:flex-col-reverse tablet:gap-4 tablet:items-center tablet:justify-center">
      <ul class="flex flex-col gap-3 text-s">
        <li
          v-for="size in sizes"
          :key="size.name"
        >
          {{ size.name }}
        </li>
      </ul>
      <img
        :src="src"
        alt="Продукт"
        class="w-[280px] h-[160px] laptop:w-[220px] laptop:h-[140px]"
      >
    </div>
  </nuxt-link>
</template>

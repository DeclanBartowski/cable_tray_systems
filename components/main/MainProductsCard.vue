<script setup lang="ts">
defineProps<{
	to: string,
	title: string,
	src: string,
	alt?: string
}>()
</script>

<template>
  <nuxt-link
    :to="to"
    class="bg-white pt-7 pr-6 pb-4 pl-7 border border-solid border-gray rounded-s flex flex-col justify-between h-[200px] transition-all hover:border hover:border-solid hover:border-yellow laptop:h-[210px] tablet:h-[180px] tablet:py-6 tablet:px-6 mobile:py-4 mobile:px-4 mobile:h-[160px]"
  >
    <h4 class="text-xl font-medium w-[196px] laptop:text-laptopL tablet:w-full mobile:text-mobileM">
      {{ title }}
    </h4>
    <div class="flex justify-end tablet:justify-normal">
      <img
        :src="src"
        :alt="title"
        class="w-[240px] h-[110px] laptop:w-[220px] laptop:h-[100px] tablet:w-[200px] tablet:h-20 mobile:w-[180px] mobile:h-[60px]"
      >
    </div>
  </nuxt-link>
</template>

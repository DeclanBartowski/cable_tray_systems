<script setup lang="ts">
import type { DescriptionPictureTitle } from '~/types/root'

defineProps<{
  data: DescriptionPictureTitle
}>()

const config = useRuntimeConfig()
</script>

<template>
  <div
    class="flex items-start justify-between w-full laptop:justify-normal laptop:gap-5 tablet:gap-4 mobile:flex-col-reverse"
  >
    <div
      class="flex flex-col gap-5 w-full max-w-[640px] text-l laptop:text-laptopL laptop:w-[50%] tablet:gap-4 mobile:w-full"
    >
      <p>{{ data.description }}</p>
    </div>
    <img
      :src="`${config.public.baseURL}${data.picture}`"
      alt="Изображение"
      class="laptop:w-[50%] mobile:w-full"
    >
  </div>
</template>

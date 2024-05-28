<script setup lang="ts">
import type { HomeSections } from '~/types/home'

defineProps<{
  data: HomeSections[]
}>()
</script>

<template>
  <div class="bg-gray pt-[100px] pb-[96px] laptop:py-20 tablet:py-14 mobile:py-6">
    <div class="container">
      <div class="flex flex-col gap-[100px] laptop:gap-20 tablet:gap-14 mobile:gap-6">
        <main-products-one :data="data[0] || {}" />
        <main-products-two :data="data[1] || {}" />
      </div>
    </div>
  </div>
</template>

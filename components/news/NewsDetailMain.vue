<script setup lang="ts">
import type { LinkTextTitle } from '~/types/root'

defineProps<{
  data: LinkTextTitle
}>()
</script>

<template>
  <div class="flex flex-col gap-[60px] laptop:gap-12 tablet:gap-10 mobile:gap-8">
    <div class="container">
        <div class="flex flex-col gap-8  laptop:gap-7 tablet:gap-6 tablet:px-[60px] mobile:px-5">
            <h2 class="text-xl4 font-medium w-full max-w-[750px] laptop:text-laptopXl4 tablet:text-tabletXl4 mobile:text-mobileXl4">
                {{ data.title }}
            </h2>
            <br>
        </div>
      <div
        class="flex flex-col gap-5 text-l laptop:text-laptopL tablet:gap-4"
        v-html="data.text"
      />
    </div>
  </div>
</template>

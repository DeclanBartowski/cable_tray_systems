<script setup lang="ts">

import type {DocumentItem} from "~/types/catalog/category/id";

defineProps<{
  documents: DocumentItem[];
}>();

const config = useRuntimeConfig();

</script>

<template>
  <div class="flex items-center gap-[60px] text-m text-center laptop:gap-12 laptop:text-laptopM tablet:gap-8 mobile:grid mobile:grid-cols-2 mobile:items-start mobile:text-mobileM mobile:gap-4">
    <NuxtLink :to="`${config.public.baseURL}${item.src}`" v-for="item in documents" class="flex items-center justify-center flex-col gap-2 w-[148px] tablet:w-auto">
      <span>{{item.title}}</span>
      <img
        src="/svg/inbox.svg"
        alt="Скачать"
      >
    </NuxtLink>
  </div>
</template>

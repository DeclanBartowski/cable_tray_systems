<script setup lang="ts">
import type {TreeItem} from "~/types/catalog/cable-support-systems/category";

defineProps<{
  sections: TreeItem[];
}>();
</script>

<template>
  <div class="flex flex-col pl-2.5 mobile:pl-0">
    <nuxt-link v-for="item in sections"
      :to="`${item.link}`"
      class="bg-white w-[340px] py-4 pl-5 pr-6 text-m border-l border-solid border-l-transparent border-b border-b-gray transition-all hover:bg-gray hover:border-l-yellow laptop:text-laptopM laptop:w-[300px] tablet:px-4 tablet:w-[290px] mobile:text-mobileM mobile:w-[240px]"
    >
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

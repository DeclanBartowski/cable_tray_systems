<script setup lang="ts">

import type {CharacterItem} from "~/types/catalog/category/id";

defineProps<{
  characters: CharacterItem[];
  description: string;
}>();

</script>

<template>
  <div class="flex gap-[133px] laptop:gap-[100px] tablet:gap-20 mobile:flex-col mobile:gap-6">
    <div class="w-full max-w-[307px] flex flex-col gap-5 tablet:w-full tablet:gap-4" v-if="characters.length > 0">
      <h4 class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM">
        Технические характеристики
      </h4>
      <ul class="flex flex-col gap-2">
        <li class="flex items-center justify-between" v-for="item in characters">
          <span class="text-m font-medium laptop:text-laptopM mobile:text-mobileM">{{item.title}}</span>
          <span class="text-s lining-nums proportional-nums">{{item.value}}</span>
        </li>
      </ul>
    </div>
    <div class="w-full max-w-[750px] flex flex-col gap-5 tablet:gap-4">
      <h4 class="text-m text-gray300 laptop:text-laptopM mobile:text-mobileM">
        Описание
      </h4>
      <div class="flex flex-col gap-5 text-l tablet:gap-4 mobile:text-mobileM" v-html="description">
      </div>
    </div>
  </div>
</template>

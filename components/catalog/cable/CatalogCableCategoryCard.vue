<script setup lang="ts">

import type {TreeItem} from "~/types/catalog/cable-support-systems/category";
const rootStore = useRootStore();
const { isOpenIndividual} = storeToRefs(rootStore)

const toggleIndividual = (): void => {
  isOpenIndividual.value = !isOpenIndividual.value;
  console.log(isOpenIndividual.value);
}

defineProps<{
  title: string;
  src: string;
  tree: TreeItem[];
  picture?: string;
}>()
</script>

<template>
  <div class="bg-white py-7 pr-10 pl-[60px] rounded-s border border-solid border-gray100 flex flex-col gap-10 transition-all hover:border hover:border-solid hover:border-yellow laptop:gap-9 tablet:py-6 tablet:px-6 tablet:gap-8 mobile:py-4 mobile:px-4 mobile:gap-7">
    <h3 class="text-xl font-medium text-center laptop:text-laptopXl">
      {{ title }}
    </h3>
    <div class="flex justify-between tablet:flex-col-reverse tablet:gap-4 tablet:items-center tablet:justify-center">
      <ul class="flex flex-col gap-3">
        <li
          v-for="size in tree"
          :key="size.name"
          class="text-s lining-nums proportional-nums transition-all hover:text-gray300"
        >
          <nuxt-link :to="size.link">
            {{ size.name }}
          </nuxt-link>
        </li>
        <li class="text-s transition-all hover:text-gray300">
          <button
            class="border-none"
            @click="toggleIndividual()"
          >
            По индивидуальным размерам
          </button>
        </li>
      </ul>
      <img
              v-if="picture"
        :src="src"
        alt="Продукт"
        class="w-[280px] h-[160px] laptop:w-[220px] laptop:h-[140px]"
      >
    </div>
  </div>
</template>
